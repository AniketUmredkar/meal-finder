import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsShuffle } from "react-icons/bs";
import "./App.css";
import Meal from "./Components/Meal";
import Recipe from "./Components/Recipe";

function App() {
  const [keyword, setKeyword] = useState("");
  const [currKeyword, setCurrKeyword] = useState("");
  const [meals, setMeals] = useState();
  const [displayMeal, setDisplayMeal] = useState();

  async function search() {
    if (keyword === "") {
      alert("Please enter a search term");
      return;
    }
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    );
    const data = await response.json();
    setMeals(data.meals);
    setDisplayMeal("");
    setCurrKeyword(keyword);
  }

  async function random() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    setDisplayMeal(data.meals[0]);
    setMeals(null);
    setCurrKeyword("");
  }

  return (
    <div className="app">
      <h1 className="heading-primary">Meal Finder</h1>
      <div className="form-container">
        <form>
          <input
            placeholder="Search for meals or keywords"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          ></input>
          <button
            className="btn btn-search"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              search();
            }}
          >
            <AiOutlineSearch></AiOutlineSearch>
          </button>
        </form>
        <button
          className="btn btn-shuffle"
          onClick={() => {
            random();
          }}
        >
          <BsShuffle></BsShuffle>
        </button>
      </div>
      {meals ? (
        <>
          <div className="message">Search results for '{currKeyword}':</div>
          <div className="meal-container">
            {meals.map((meal, index) => {
              return (
                <Meal
                  meal={meal}
                  key={index}
                  setDisplayMeal={setDisplayMeal}
                ></Meal>
              );
            })}
          </div>
        </>
      ) : currKeyword === "" ? null : (
        <div className="message">Sorry! There are no search results</div>
      )}
      {displayMeal ? <Recipe displayMeal={displayMeal}></Recipe> : null}
    </div>
  );
}

export default App;
