import React from "react";
import { Link } from "react-router-dom";
//import Search from "../Search";
import "./Menu.css";


function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
