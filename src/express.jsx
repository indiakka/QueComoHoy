const express = require("express");
const app = express();
const dialogflow = require("@google-cloud/dialogflow");

const projectId = process.env.GOOGLE_PROJECT_ID;
const sessionId = Math.random().toString(36).substring(7);

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

app.use(express.json());

app.post("/api/dialogflow-init", async (req, res) => {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: req.body.message,
        languageCode: "en-US",
      },
    },
  };
  try {
    const response = await sessionClient.detectIntent(request);
    res.json({ message: response.queryResult.fulfillmentText });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).send(err);
  }
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
