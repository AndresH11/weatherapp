import React from "react";
import '../estilos/ButtonSearchForPlace.css';

const ButtonSearchForPlace = ()=>{

    const activateSearchEngine = ()=>{ //FUNCION PARA BAJAR EL CONTENEDOR WeatherNav
        
        document.querySelector('.container__WeatherNav').classList.add('active');
    };

    return(
        <button type='button' className='ButtonSearchForPlace' onClick={activateSearchEngine}>Search for places</button>
    );
};

export default ButtonSearchForPlace;