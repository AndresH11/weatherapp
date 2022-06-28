import React from "react";
import '../estilos/Seccion3.css';

const Seccion3 = ({ children })=>{
    return(
        <section className='Seccion3'>
            <p className='Title__Seccion3'>Today’s Hightlights </p>
            <div className='Container__Seccion3-card'>
                { children }
            </div>
        </section>
    );
};

export default Seccion3;