import React from "react";

function TipsNutricion() {
  const consejos = [
    {
      id: 1,
      titulo: "Bebe mucha agua",
      descripcion:
        "El agua es esencial para una buena salud y para mantener el cuerpo hidratado. Bebe al menos 8 vasos de agua al día para mantener tu cuerpo funcionando correctamente.",
    },
    {
      id: 2,
      titulo: "Come más frutas y verduras",
      descripcion:
        "Las frutas y verduras son ricas en nutrientes esenciales y fibra dietética. Intenta incluir al menos 5 porciones de frutas y verduras en tu dieta diaria.",
    },
    {
      id: 3,
      titulo: "Limita el consumo de grasas y azúcares",
      descripcion:
        "El exceso de grasas y azúcares puede contribuir a una serie de problemas de salud, como la obesidad y la diabetes. Limita el consumo de alimentos ricos en grasas y azúcares y opta por opciones más saludables en su lugar.",
    },
  ];

  return (
    <div>
      <h2>Consejos de nutrición</h2>
      <ul>
        {consejos.map((consejo) => (
          <li key={consejo.id}>
            <h3>{consejo.titulo}</h3>
            <p>{consejo.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TipsNutricion;
