import React from "react";
import "./Ingredient.css";

function Ingredient(props) {
  return (
    <li className="ingredient">
      {props.ingredient} - {props.measure}
    </li>
  );
}

export default Ingredient;
