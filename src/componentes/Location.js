import React from "react";
import '../estilos/Location.css';
import Ubication from "../geolocation/Ubication";

const Location = ({locationInitial})=>{
  const coordenadas = Ubication();

  const UicationInitial = ()=>{
    locationInitial(coordenadas[0], coordenadas[1]);
  };
    return(
      <span className='conteiner__location' onClick={ UicationInitial }>
        <i className='bx bx-current-location' Style='color:#E7E7EB;' ></i>
      </span>
    );
};

export default Location;