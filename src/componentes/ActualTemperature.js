import React from "react";
import "../estilos/ActualTemperature.css";
import dateDay from "../geolocation/FechaYHora";

const ActualTemperature = ({ icon, temperaturaActual, unidad, estado, nombreCiudad }) => {
  return (
    <div className="container__ActualTemperature">
      <figure className="container__ActualTemperature-image">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='atmofera' />
      </figure>
      <div className="numberDegrees__ActualTemperature">
        <p className="numberDegrees__ActualTemperature-number">{temperaturaActual}</p>
        <p className="numberDegrees__ActualTemperature-degrees">{`°${unidad}`}</p>
      </div>
      <p className='estado__ActualTemperature'>{estado}</p>
      <p className='today__ActualTemperature'>{`Today · ${dateDay(0)[0]}, ${dateDay()[2]} ${dateDay()[1]}`}</p>
      <div className='container__ActualTemperature-ubicationText'>
        <i className='bx bxs-location-plus'></i>
        <p className='city'>{nombreCiudad}</p>
      </div>
    </div>
  );
};

export default ActualTemperature;
