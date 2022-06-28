import React from "react";
import '../estilos/NextDaysWeather.css';

const NextDaysWeather = ({ temperaturaFirst, temperaturaSecond, day = 'Tomorrow', icon, unidad})=>{
    return(
        <div className= 'NextDaysWeather' >
            <p className='day__NextDaysWeather'>{day}</p>
            <figure className='image_NextDaysWeather'>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='Temperature' />
            </figure>
            <div className='degrees__NextDaysWeather'>
              <p className='firstDegree'>{`${ temperaturaFirst }°${unidad}`}</p>
              <p className='secondDegree'>{`${ temperaturaSecond }°${unidad}`}</p>
            </div>
        </div>
    );
};

export default NextDaysWeather;