import React from "react";
import ButtonSearchForPlace from "../componentes/ButtonSearchForPlace";
import Location from "../componentes/Location";
import '../estilos/HeaderSearchLocation.css';

const HeaderSearchLocation = ({ locationInitial })=>{
    return(
      <div className='HeaderSearchLocation'>
        <ButtonSearchForPlace />
        <Location locationInitial = { locationInitial } />
      </div>
    );
};

export default HeaderSearchLocation;