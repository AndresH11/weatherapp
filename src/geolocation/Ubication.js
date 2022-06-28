import { useEffect, useState } from "react";

const Ubication = () => {
  const [vr, setVr] = useState([]);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setVr([latitude, longitude]);
  };

  const error = () => {
    alert("Sorry, no position available.");
  };

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success, error);
  },[]);

  return vr;
};

export default Ubication;
