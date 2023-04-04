import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Paginas/Inicio";
import SobreNosotros from "./components/Paginas/SobreNosotros";
import Recetas from "./components/Recetas/Recetas";
import TipsNutricion from "./components/Paginas/TipsNutricion";
import Contacto from "./components/Paginas/Contacto";
//import Chatbot from "react-chatbot-kit";
//import config from "./components/ChatBot/ChatbotConfig.jsx";
//import ActionProvider from "./components/ChatBot/ActionProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import MessageParser from "./components/ChatBot/MessageParser";
//import Heybot from "./components/ChatBot/Heybot";
import Chatpropio from "./components/ChatBot/ChatPropio";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Chatpropio />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Recetas" element={<Recetas />} />
        <Route path="/TipsNutricion" element={<TipsNutricion />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
