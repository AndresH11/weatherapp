import React, { useState } from "react";
import '../estilos/CelsiusFahrenheit.css';

const CelsiusFahrenheit = ({ celsius,fharenheit, activeClasse })=>{

    return(
        <div className='container__CelsiusFahrenheit'>
            <button className={`celsius ${activeClasse ? '': 'celsius-active'}`} type='button' onClick={celsius}>°C</button>
            <button className={`fharenheit ${activeClasse ? 'fharenheit-active': ''}`} type='button' onClick={fharenheit}>°F</button>
        </div>
    );
};

export default CelsiusFahrenheit;