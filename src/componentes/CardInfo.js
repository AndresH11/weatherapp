import React from "react";
import "../estilos/CardInfo.css";

const CardInfo = ({ title, date, unidades, PercentageBar, wsw }) => {
  const styles = {
    none: {
      display: "none",
    },
    flex: {
      display: "flex",
      alignItems: 'center'
    },
    block:{
      display: 'block'
    },
  };

  return (
    <div className="CardInfo">
      <p className="state__CardInfo">{title}</p>
      <div className="containerInfoCentral__CardInfo">
        <p className="infoCentral1__CardInfo">{date}</p>
        <p className="infoCentral2__CardInfo">{unidades}</p>
      </div>
      <div className="infoBotton__CardInfo">
        <div style={wsw ? styles.flex : styles.none}>
          <figure
            className="figure__CardInfo"
            style={PercentageBar ? styles.none : styles.flex}
          >
            <i
              class="bx bxs-up-arrow"
              style={PercentageBar ? styles.none : styles.flex}
            ></i>
          </figure>
          <p style={PercentageBar ? styles.none : styles.flex}>WSW</p>
        </div>
        <div
          className="containerPercentageBar__cardInfo"
          style={PercentageBar ? styles.block : styles.none}
        >
          <div className="numbersPercentageBar">
            <p>0%</p>
            <p>50%</p>
            <p>100%</p>
          </div>
          <div className="containerSpanPercentageBar">
            <span className="PercentageBar" style={{width:`${date}%`}}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
