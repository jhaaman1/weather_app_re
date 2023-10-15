import axios from "axios";
import React, { useEffect, useState } from "react";

const LocationButton = ({ handlelocation }) => {
  const API_KEY = "af85b8af001d4bbb0b7822a8105b197d";
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });
  const onSuccess = (location) => {
    setLocation({
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const fetchWeatherViaLocation = (e) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=${API_KEY}`
      )
      .then((res) => {
        handlelocation(res.data.name);
      })
      .catch((err) => {
        console.log(err.reponse.data.message);
      });
  };

  const onError = (error) => {
    setLocation({
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({ code: 0, message: "Geolocation not supported" });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return (
    <button
      className="input-group-text h-50"
      id="basic-addon2"
      onClick={(e) => {
        fetchWeatherViaLocation();
      }}
    >
      <i className="fa-solid fas fa-location-dot"></i>
    </button>
  );
};

export default LocationButton;
