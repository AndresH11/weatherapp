import React from "react";
import "../estilos/WeatherNav.css";
import Search from "../componentes/Search";
import ResultSearch from "../componentes/ResultSearch";

const WeatherNav = ({ bottonSearchOnclick }) => {

  const deActivateSearchEngine = ()=>{ //FUNCION PARA SUBIR EL CONTENEDOR WeatherNav

    document.querySelector('.container__WeatherNav').classList.remove('active');
  };

  return (
    <nav className="container__WeatherNav">
      <div className="container_X">
        <i class="bx bx-x" onClick={deActivateSearchEngine}></i>
      </div>
      <Search onClick = {bottonSearchOnclick} />
      <ResultSearch text = {'Bogotá'} onClick = {bottonSearchOnclick} />
      <ResultSearch text = {'Cali'} onClick = {bottonSearchOnclick} />
      <ResultSearch text = {'Manizales'} onClick = {bottonSearchOnclick} />
    </nav>
  );
};

export default WeatherNav;
