import { React, useEffect, useState } from "react";
import "./App.css";
import Seccion1 from "./contenedores/Seccion1";
import Seccion2 from "./contenedores/Seccion2";
import Seccion3 from "./contenedores/Seccion3";
import HeaderSearchLocation from "./contenedores/HeaderSearchLocation";
import ActualTemperature from "./componentes/ActualTemperature";
import NextDaysWeather from "./contenedores/NextDaysWeather";
import CardInfo from "./componentes/CardInfo";
import WeatherNav from "./contenedores/WeatherNav";
import Footer from "./componentes/Footer";
import Ubication from "./geolocation/Ubication";
import dateDay from "./geolocation/FechaYHora";
import {
  MeteorologicalDAtaCurrent,
  MeteorologicalDAtaFollowingDays,
  currentWeatherDataForASpecificCity,
  FollowingDaysWeatherDataForASpecificCity,
} from "./meteorological/MeteorologicalData";

function App() {
  //ESTADO CELSIUS O FHARENHEIT
  const [getCelsiusFahrenheit, setGetCelsiusFahrenheit] = useState(false);

  //ESTADO DEL TIEMPO ACTUAL
  const [meteorologicalCurrent, setMeteorologicalCurrent] = useState([]);

  //ESTADO DEL TIEMPO PARA LOS SIGUINTES DIAS
  const [meteorologicalFollowingDays, setMeteorologicalFollowingDays] =
    useState([]);

  const coordenadas = Ubication(); //COORDENADAS EN QUE SE ENCUENTRA EL USUARIO

  //FUNCION PARA CONSEGUIR EL ESTADO METEOROLOGICO
  const datosMeteorologicalCurrentFollowingDays = async (
    latitude,
    longitude
  ) => {
    //CONSEGUIMOS LA INFORMACION DEL ESTADO METEORILOGICO ACTUAL
    setMeteorologicalCurrent(
      await MeteorologicalDAtaCurrent(latitude, longitude)
    );

    //CONSEGUIMOS LA INFORMACION DEL ESTADO METEORILOGICO PARA LOS SIGUINTES DIAS
    setMeteorologicalFollowingDays(
      await MeteorologicalDAtaFollowingDays(latitude, longitude)
    );
  };

  //FUNCION PARA CONSEGUIR EL ESTADO METEOROLOGICO DE UN CIUDAD EN ESPECIFICO
  const datosMeteorologicalCurrentFollowingDaysOfCitySpecific = async (
    cityName
  ) => {
    //CONSEGUIMOS LA INFORMACION DEL ESTADO METEORILOGICO ACTUAL
    setMeteorologicalCurrent(
      await currentWeatherDataForASpecificCity(cityName)
    );

    //CONSEGUIMOS LA INFORMACION DEL ESTADO METEORILOGICO PARA LOS SIGUINTES DIAS
    setMeteorologicalFollowingDays(
      await FollowingDaysWeatherDataForASpecificCity(cityName)
    );
  };

  useEffect(() => {
    //ACTIVAMOS LA FUNCION PARA OBTENER LA INFORMACION METEORILOGICA
    datosMeteorologicalCurrentFollowingDays(coordenadas[0], coordenadas[1]);
  }, [coordenadas]);

  let celsiusConvertion = [
    //VALORES DE LA TEMPERATURA EN GRADOS CELSIUS
    (((meteorologicalCurrent[1] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[0] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[1] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[3] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[4] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[6] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[7] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[9] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[10] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[12] - 32) * 5) / 9).toFixed(1),
    (((meteorologicalFollowingDays[13] - 32) * 5) / 9).toFixed(1),
  ];

  const conversionCelsius = () => {
    //CONVIERTE LOS GRADOS A CELSIUS
    setGetCelsiusFahrenheit(false);
  };

  const conversionFharenheit = () => {
    //CONVIERTE LOS GRADOS A FHARENHEIT
    setGetCelsiusFahrenheit(true);
  };

  return (
    <div className="App">
      <Seccion1>
        <HeaderSearchLocation locationInitial = {datosMeteorologicalCurrentFollowingDays}/>
        <ActualTemperature
          icon={meteorologicalCurrent[7]}
          temperaturaActual={
            getCelsiusFahrenheit
              ? meteorologicalCurrent[1].toFixed(1)
              : celsiusConvertion[0]
          }
          unidad={getCelsiusFahrenheit ? "F" : "C"}
          estado={meteorologicalCurrent[6]}
          nombreCiudad={meteorologicalCurrent[0]}
        />
        <WeatherNav bottonSearchOnclick = { datosMeteorologicalCurrentFollowingDaysOfCitySpecific } />
      </Seccion1>
      <Seccion2
        celsius={conversionCelsius}
        fharenheit={conversionFharenheit}
        activeClasse={getCelsiusFahrenheit}
      >
        <NextDaysWeather
          temperaturaFirst={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[0].toFixed(1)
              : celsiusConvertion[1]
          }
          temperaturaSecond={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[1].toFixed(1)
              : celsiusConvertion[2]
          }
          day={"Tomorrow"}
          icon={meteorologicalFollowingDays[2]}
          unidad={getCelsiusFahrenheit ? "F" : "C"}
        />
        <NextDaysWeather
          temperaturaFirst={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[3].toFixed(1)
              : celsiusConvertion[3]
          }
          temperaturaSecond={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[4].toFixed(1)
              : celsiusConvertion[4]
          }
          day={`${dateDay(2)[0]},${dateDay()[2]},${dateDay()[1]}`}
          icon={meteorologicalFollowingDays[5]}
          unidad={getCelsiusFahrenheit ? "F" : "C"}
        />
        <NextDaysWeather
          temperaturaFirst={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[6].toFixed(1)
              : celsiusConvertion[5]
          }
          temperaturaSecond={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[7].toFixed(1)
              : celsiusConvertion[6]
          }
          day={`${dateDay(3)[0]},${dateDay()[2]},${dateDay()[1]}`}
          icon={meteorologicalFollowingDays[8]}
          unidad={getCelsiusFahrenheit ? "F" : "C"}
        />
        <NextDaysWeather
          temperaturaFirst={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[9].toFixed(1)
              : celsiusConvertion[7]
          }
          temperaturaSecond={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[10].toFixed(1)
              : celsiusConvertion[8]
          }
          day={`${dateDay(4)[0]},${dateDay()[2]},${dateDay()[1]}`}
          icon={meteorologicalFollowingDays[11]}
          unidad={getCelsiusFahrenheit ? "F" : "C"}
        />
        <NextDaysWeather
          temperaturaFirst={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[12]
              : celsiusConvertion[9]
          }
          temperaturaSecond={
            getCelsiusFahrenheit
              ? meteorologicalFollowingDays[13]
              : celsiusConvertion[10]
          }
          day={`${dateDay(5)[0]},${dateDay()[2]},${dateDay()[1]}`}
          icon={meteorologicalFollowingDays[14]}
          unidad={getCelsiusFahrenheit ? "F" : "C"}
        />
        <Seccion3>
          <CardInfo
            title={"Wind status"}
            date={meteorologicalCurrent[5]}
            unidades={"mph"}
            PercentageBar={false}
            wsw={true}
          />
          <CardInfo
            title={"Humidity"}
            date={meteorologicalCurrent[3]}
            unidades={"%"}
            PercentageBar={true}
          />
          <CardInfo
            title={"Visibility"}
            date={meteorologicalCurrent[4]}
            unidades={"miles"}
            PercentageBar={false}
            wsw={false}
          />
          <CardInfo
            title={"Air Pressure"}
            date={meteorologicalCurrent[2]}
            unidades={"mb"}
            PercentageBar={false}
            wsw={false}
          />
        </Seccion3>
        <Footer />
      </Seccion2>
    </div>
  );
}

export default App;
