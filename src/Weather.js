import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      ` The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "7e04d1dba11cfe0cbca24733d4d83f1e";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <h2>Hello from Weather </h2>
      <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
        Node
      </a>
    </div>
  );
}
