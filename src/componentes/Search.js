import React from "react";
import "../estilos/Search.css";

const Search = ({onClick}) => {
  const upperCaseValue = () => {
    let inputValue = document.querySelector(".input__search").value;
    let patron = /\w\S*/g;
    return inputValue.replace(
      patron,
      (p) => p.charAt(0).toUpperCase() + p.substring(1).toLowerCase()
    );
  };

  const searchWeatherOfCity = () => {
    let searchValue = upperCaseValue();

    if (searchValue.length > 3) {
      onClick(searchValue);
      document.querySelector('.container__WeatherNav').classList.remove('active');
    } else {
      alert("Lo siento, escriba un nombre de ciudad correcto");
    }
  };

  return (
    <div className="conatinerPrincipal__search">
      <div className="text__search">
        <i className="bx bx-search icon__search"></i>
        <input
          className="input__search"
          type="text"
          placeholder="search location"
        />
      </div>
      <button
        className="button__search"
        type="button"
        onClick={searchWeatherOfCity}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
