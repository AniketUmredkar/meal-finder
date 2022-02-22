import React from "react";
import { useState } from "react";
import "./Meal.css";

function Meal(props) {
  const [styleObj, setStyleObj] = useState({ opacity: 0 });

  return (
    <div
      className="meal"
      onClick={() => {
        props.setDisplayMeal(props.meal);
      }}
      onMouseOver={() => {
        setStyleObj({ opacity: 1 });
      }}
      onMouseLeave={() => {
        setStyleObj({ opacity: 0 });
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
