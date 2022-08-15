import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  const apiKey = "23cbb82cefe3f543fc2729ccb9d974f4";
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showDetails);

  function handleSubmit(event) {
    event.preventDefault();
    setText(
      <div>
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description} </li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)} km/h</li>
          <li>
            <img src={icon} alt={description} />{" "}
          </li>
        </ul>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showDetails(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <p>{text}</p>
    </div>
  );
}
