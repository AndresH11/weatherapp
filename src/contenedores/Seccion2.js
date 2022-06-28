import React from "react";
import '../estilos/Seccion2.css'
import CelsiusFahrenheit from "../componentes/CelsiusFahrenheit";

const Seccion2 = ({children, celsius, fharenheit, activeClasse })=>{
  return(
    <section className='Seccion2'>
      <CelsiusFahrenheit celsius = { celsius } fharenheit = {fharenheit} activeClasse={ activeClasse } />
      <div className='containerSecond__seccion2'>
        {children}
      </div>
    </section>
  );
};

export default Seccion2;