import { createChatBotMessage } from "react-chatbot-kit";

const MessageParser = (message, state) => {
  // Aquí puedes crear lógica para analizar el mensaje del usuario
  // y decidir qué tipo de respuesta enviar.

  // Por ejemplo, si el usuario envía "Hola", el bot podría responder con "¡Hola! ¿Cómo estás?"
  if (message.toLowerCase() === "hola") {
    return createChatBotMessage("¡Hola! ¿Cómo estás?");
  }

  // Si el usuario envía otro mensaje, el bot podría responder con un mensaje de error.
  return createChatBotMessage(
    "Lo siento, no entiendo lo que dices. Por favor, intenta de nuevo."
  );
};

export default MessageParser;
