import React from "react";
import './Recetas.css'

function Recetas() {
  const recetas = [
    {
      id: 1,
      titulo: "Ensalada de quinoa y aguacate",
      imagen: "https://via.placeholder.com/150",
      descripcion:
        "Una ensalada fresca y saludable con quinoa, aguacate y tomates cherry.",
      ingredientes: [
        "1 taza de quinoa",
        "1 aguacate",
        "1 taza de tomates cherry",
        "2 cucharadas de aceite de oliva",
        "1 cucharada de jugo de limón",
        "Sal y pimienta al gusto",
      ],
      instrucciones:
        "Cocina la quinoa según las instrucciones del paquete. Corta el aguacate y los tomates cherry en trozos. Mezcla la quinoa cocida, el aguacate y los tomates cherry en un tazón. Agrega el aceite de oliva, el jugo de limón, la sal y la pimienta y mezcla bien. Sirve frío.",
    },
    {
      id: 2,
      titulo: "Pollo a la parrilla con verduras",
      imagen: "https://via.placeholder.com/150",
      descripcion:
        "Una comida fácil y deliciosa con pollo a la parrilla y una variedad de verduras asadas.",
      ingredientes: [
        "2 pechugas de pollo",
        "1 pimiento rojo",
        "1 pimiento amarillo",
        "1 cebolla roja",
        "1 calabacín",
        "2 cucharadas de aceite de oliva",
        "1 cucharada de orégano seco",
        "1 cucharada de ajo en polvo",
        "Sal y pimientaal gusto",
      ],
      instrucciones:
        "Precalienta la parrilla a fuego medio-alto. Corta los pimientos, la cebolla y el calabacín en trozos. Mezcla el aceite de oliva, el orégano, el ajo en polvo, la sal y la pimienta en un tazón.Cepilla el pollo y las verdurascon la mezcla de aceite y especias.Coloca el pollo y las verduras en la parrilla y cocina durante unos 10 - 12 minutos,volteando ocasionalmente, hasta que estén tiernos y dorados.Sirve caliente.",
    },
    {
      id: 3,
      titulo: "Tarta de manzana",
      imagen: "https://via.placeholder.com/150",
      descripcion:
        "Un postre clásico con una masa escamosa y una capa de manzanas dulces.",
      ingredientes: [
        "1 1/2 tazas de harina",
        "1/4 taza de azúcar",
        "1/2 taza de mantequilla fría",
        "3-4 manzanas peladas y rebanadas",
        "1 / 2 taza de azúcar morena",
        "1 cucharadita de canela molida",
        "1 cucharadita de nuez moscada molida",
        "1 cucharada de jugo de limón",
      ],
      instrucciones:
        "Precalienta el horno a 375 grados F. Mezcla la harina y el azúcar enun tazón grande.Agrega la mantequilla y corta con un cortador de masa hasta que la mezcla se parezca a migajas gruesas.Agrega 2 - 3 cucharadas de agua fría y mezcla hasta que la masa se junte.Extiende la masa en un molde para tarta y coloca las manzanas en capas en la parte superior.Mezcla el azúcar morena, la canela, la nuez moscada y el jugo de limón en un tazón pequeño y espolvorea sobre las manzanas.Hornea durante unos 45 minutos, hasta que la masa esté dorada y las manzanas estén tiernas.Sirve caliente con helado de vainilla si lo deseas.",
    },
  ];

  return (
    <div>
      <h2>Recetas</h2>
      <ul>
        {recetas.map((receta) => (
          <li key={receta.id}>
            <img src={receta.imagen} alt={receta.titulo} />
            <div>
              <h3>{receta.titulo}</h3>
              <p>{receta.descripcion}</p>
              <button>Ver receta</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recetas;
