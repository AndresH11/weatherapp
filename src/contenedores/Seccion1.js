import React from "react";
import '../estilos/Seccion1.css';

const Seccion1 = ({children})=>{
    return(
        <div className='sectionWeatherCity'>
            {children}
        </div>
    );
};

export default Seccion1;