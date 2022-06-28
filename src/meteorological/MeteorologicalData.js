import axios from "axios";
import key_api from "../secrets/Secrets";

const API = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 5000,
  params: {
    appid: key_api,
    units: "imperial",
  },
});

//FUNCION PARA OBTENER LOS DATOS DEL DIA ACTUAL

export const MeteorologicalDAtaCurrent = async (lat, lon) => {
  const { data } = await API("weather", {
    params: {
      lat: lat,
      lon: lon,
    },
  });

  //CURRENT WEATHER
  let nameCurrentCity = data.name; //NOMBRE DE LA CIUDAD
  let temperatureCurrent = data.main.temp; //TEMPERATURA ACTUAL
  let pressureCurrent = data.main.pressure; //PRESION ADMOFERICA ACTUAL
  let humidityCurrent = data.main.humidity; //HUMEDAD ADMOFERICA ACTUAL
  let visibilityCurrent = data.visibility; //VISIBILIDAD ACTUAL
  let wind_speedCurrent = data.wind.speed; //VELOCIDAD DEL VIENTO ACTUAL
  let conditionCurrent = data.weather[0].main; //CONDICION ADMOFERICA ACTUAL
  let iconCurrent = data.weather[0].icon; //IMAGEN ADMOFERICA ACTUAL

  return [
    nameCurrentCity,
    temperatureCurrent,
    pressureCurrent,
    humidityCurrent,
    visibilityCurrent,
    wind_speedCurrent,
    conditionCurrent,
    iconCurrent,
  ];
};

//FUNCION PAR OBTENER LOS DATOS DE LOS DIAS SIGUIENTES

export const MeteorologicalDAtaFollowingDays = async (lat, lon) => {
  const { data } = await API("forecast", {
    params: {
      lat: lat,
      lon: lon,
    },
  });

  //CURRENT TOMORROW
  let temperatureTomorrow1 = data.list[3].main.temp; //TEMPERATURA TOMORROW1
  let temperatureTomorrow2 = data.list[5].main.temp; //TEMPERATURA TOMORROW2
  let iconTomorrow = data.list[3].weather[0].icon; //IMAGEN ADMOFERICA TOMORROW

  //CURRENT SECOND DAY
  let temperatureSecondDay1 = data.list[12].main.temp; //TEMPERATURA SecondDay1
  let temperatureSecondDay2 = data.list[14].main.temp; //TEMPERATURA SecondDay2
  let iconSecondDay = data.list[12].weather[0].icon; //IMAGEN ADMOFERICA SecondDay

  //CURRENT THIRD DAY
  let temperatureThirdDay1 = data.list[19].main.temp; //TEMPERATURA ThirdDay1
  let temperatureThirdDay2 = data.list[21].main.temp; //TEMPERATURA ThirdDay2
  let iconThirdDay = data.list[19].weather[0].icon; //IMAGEN ADMOFERICA ThirdDay

  //CURRENT FOURTH DAY
  let temperatureFourthDay1 = data.list[27].main.temp; //TEMPERATURA Fourth1
  let temperatureFourthDay2 = data.list[29].main.temp; //TEMPERATURA Fourth2
  let iconFourthDay = data.list[27].weather[0].icon; //IMAGEN ADMOFERICA Fourth

  //CURRENT FIFTH DAY
  let temperatureFifthDay1 = data.list[35].main.temp; //TEMPERATURA FifthDay1
  let temperatureFifthDay2 = data.list[37].main.temp; //TEMPERATURA FifthDay2
  let iconFifthDay = data.list[35].weather[0].icon; //IMAGEN ADMOFERICA FifthDay

  return [
    temperatureTomorrow1,
    temperatureTomorrow2,
    iconTomorrow,
    temperatureSecondDay1,
    temperatureSecondDay2,
    iconSecondDay,
    temperatureThirdDay1,
    temperatureThirdDay2,
    iconThirdDay,
    temperatureFourthDay1,
    temperatureFourthDay2,
    iconFourthDay,
    temperatureFifthDay1,
    temperatureFifthDay2,
    iconFifthDay,
  ];
};

//FUNCIONES PARA OBTENER LOS DATOS METEOROLOGICOS DE UNA CIUDAD EN ESPECIFICO

//DATOS METEOROLOCOS ACTUAL

export const currentWeatherDataForASpecificCity = async(cityName)=>{
  const { data } = await API("weather", {
    params: {
      q: cityName,
    },
  });

  //CURRENT WEATHER
  let nameCurrentCity = data.name; //NOMBRE DE LA CIUDAD
  let temperatureCurrent = data.main.temp; //TEMPERATURA ACTUAL
  let pressureCurrent = data.main.pressure; //PRESION ADMOFERICA ACTUAL
  let humidityCurrent = data.main.humidity; //HUMEDAD ADMOFERICA ACTUAL
  let visibilityCurrent = data.visibility; //VISIBILIDAD ACTUAL
  let wind_speedCurrent = data.wind.speed; //VELOCIDAD DEL VIENTO ACTUAL
  let conditionCurrent = data.weather[0].main; //CONDICION ADMOFERICA ACTUAL
  let iconCurrent = data.weather[0].icon; //IMAGEN ADMOFERICA ACTUAL

  return [
    nameCurrentCity,
    temperatureCurrent,
    pressureCurrent,
    humidityCurrent,
    visibilityCurrent,
    wind_speedCurrent,
    conditionCurrent,
    iconCurrent,
  ];
};

//DATOS METEOROLOCOS PARA LOS SIGUIENTES DIAS

export const FollowingDaysWeatherDataForASpecificCity = async (cityName) => {
  const { data } = await API("forecast", {
    params: {
      q: cityName,
    },
  });

  //CURRENT TOMORROW
  let temperatureTomorrow1 = data.list[3].main.temp; //TEMPERATURA TOMORROW1
  let temperatureTomorrow2 = data.list[5].main.temp; //TEMPERATURA TOMORROW2
  let iconTomorrow = data.list[3].weather[0].icon; //IMAGEN ADMOFERICA TOMORROW

  //CURRENT SECOND DAY
  let temperatureSecondDay1 = data.list[12].main.temp; //TEMPERATURA SecondDay1
  let temperatureSecondDay2 = data.list[14].main.temp; //TEMPERATURA SecondDay2
  let iconSecondDay = data.list[12].weather[0].icon; //IMAGEN ADMOFERICA SecondDay

  //CURRENT THIRD DAY
  let temperatureThirdDay1 = data.list[19].main.temp; //TEMPERATURA ThirdDay1
  let temperatureThirdDay2 = data.list[21].main.temp; //TEMPERATURA ThirdDay2
  let iconThirdDay = data.list[19].weather[0].icon; //IMAGEN ADMOFERICA ThirdDay

  //CURRENT FOURTH DAY
  let temperatureFourthDay1 = data.list[27].main.temp; //TEMPERATURA Fourth1
  let temperatureFourthDay2 = data.list[29].main.temp; //TEMPERATURA Fourth2
  let iconFourthDay = data.list[27].weather[0].icon; //IMAGEN ADMOFERICA Fourth

  //CURRENT FIFTH DAY
  let temperatureFifthDay1 = data.list[35].main.temp; //TEMPERATURA FifthDay1
  let temperatureFifthDay2 = data.list[37].main.temp; //TEMPERATURA FifthDay2
  let iconFifthDay = data.list[35].weather[0].icon; //IMAGEN ADMOFERICA FifthDay

  return [
    temperatureTomorrow1,
    temperatureTomorrow2,
    iconTomorrow,
    temperatureSecondDay1,
    temperatureSecondDay2,
    iconSecondDay,
    temperatureThirdDay1,
    temperatureThirdDay2,
    iconThirdDay,
    temperatureFourthDay1,
    temperatureFourthDay2,
    iconFourthDay,
    temperatureFifthDay1,
    temperatureFifthDay2,
    iconFifthDay,
  ];
};