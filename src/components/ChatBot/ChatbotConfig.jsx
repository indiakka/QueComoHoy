import { createChatBotMessage } from "react-chatbot-kit";

import ActionProvider from "./ActionProvider";

const config = {
  botName: "Mi Bot",
  initialMessages: [createChatBotMessage("¡Hola! ¿En qué puedo ayudarte?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  actionProvider: ActionProvider,
};

export default config;
