import React from "react";
import "../estilos/Search.css";

const Search = ({ onClick }) => {
  const upperCaseValue = () => { // FUNCION PARA CONVERTIR LA PRIMERA LETRA DE CADA PALABRA EN MAYUSCULA
    let inputValue = document.querySelector(".input__search").value;
    let cityName = inputValue.split(" ");
    return cityName.map((palabra) => {
        return palabra[0].toUpperCase() + palabra.substring(1);
      })
      .join(" ");
  };

  const searchWeatherOfCity = () => { //FUNCIÓN PARA BUSCAR EL PAIS ESCRITO
    let searchValue = upperCaseValue();

    if (searchValue.length > 3) {
      onClick(searchValue);
      document
        .querySelector(".container__WeatherNav")
        .classList.remove("active");
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
