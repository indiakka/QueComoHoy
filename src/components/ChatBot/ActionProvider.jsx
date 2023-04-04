import axios from "axios";
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // Envía la consulta del usuario a ChatGPT y devuelve la respuesta del modelo de lenguaje.
  async handleMessageParser(query) {
    const response = await axios.post(
      "https://api.openai.com/v1/engine/.../completions",
      {
        prompt: query,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: "\n",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"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"}`,
        },
      }
    );

    const chatbotResponse = response.data.choices[0].text.trim();

    // Crea un mensaje de chatbot utilizando la respuesta del modelo de lenguaje.
    const message = createChatBotMessage(chatbotResponse);

    // Actualiza el estado del chatbot para mostrar el mensaje.
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
