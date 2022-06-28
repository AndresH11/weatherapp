import React from "react";
import '../estilos/ResultSearch.css'

const ResultSearch = ({ text, onClick })=>{

    const searchWeatherOfCity = () => {
        onClick(text);
        document.querySelector('.container__WeatherNav').classList.remove('active');
      };

    return(
        <div className='container__ResultSearch' onClick={searchWeatherOfCity}>
            <p className='text__ResultSearch'>{text}</p>
            <i className='bx bx-chevron-right'></i>
        </div>
    );
};

export default ResultSearch;