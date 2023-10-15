import React from "react";

const MainCard = ({ data }) => {
  let emoji = null;
  if (data.main) {
    if (data.weather[0].main == "Clouds") {
      emoji = "fa-cloud";
    } else if (data.weather[0].main === "Thunderstorm") {
      emoji = "fa-bolt";
    } else if (data.weather[0].main === "Drizzle") {
      emoji = "fa-cloud-rain";
    } else if (data.weather[0].main === "Rain") {
      emoji = "fa-cloud-shower-heavy";
    } else if (data.weather[0].main === "Snow") {
      emoji = "fa-snow-flake";
    } else {
      emoji = "fa-smog";
    }
  } else {
    return <div>....</div>;
  }

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  let time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="bg-dark bg-opacity-50 py-3">
      <h2 className="card-title">{data.name}</h2>
      <p className="card-text lead">
        {day}, {month}, {date}, {year}
        <br />
        {time}
      </p>
      <hr />
      <i className={`fas ${emoji} fa-4x`}> </i>
      <h1 className="fw-bolder mb-5">
        {(data.main.temp - 273.15).toFixed(2)}&deg;C
      </h1>
      <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
      <p className="lead">Humidity:{data.wind.speed}km/h</p>
      <p className="lead">Wind:{data.main.humidity}%</p>
    </div>
  );
};

export default MainCard;
