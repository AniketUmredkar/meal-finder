import React from "react";
import { useState } from "react";
import "./Meal.css";

function Meal(props) {
  const [styleObj, setStyleObj] = useState({ display: "none" });

  return (
    <div
      className="meal"
      onClick={() => {
        props.setDisplayMeal(props.meal);
      }}
      onMouseOver={() => {
        setStyleObj({ display: "flex" });
      }}
      onMouseLeave={() => {
        setStyleObj({ display: "none" });
      }}
    >
      <img
        className="meal-img"
        src={props.meal.strMealThumb}
        alt={props.meal.strMeal}
      ></img>
      <div className="hover-name" style={styleObj}>
        {props.meal.strMeal}
      </div>
    </div>
  );
}

export default Meal;
