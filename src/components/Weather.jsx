import React, { useState , useEffect} from "react";
import axios from "axios";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [icon, setIcon] = useState("");
  const showWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35f6817ef65d44cb03446811d0e7c64a&units=metric`
      )
      .then((response) => {
        setWeather(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setIcon(response.data.weather[0].icon);

        console.log(response);
      })
      .catch((error) => {
        setWeather(null);
        setHumidity(null);
        setIcon(null);
        alert("Enter Valid City Name")
      });
  };
  return (
    <>
      <div className="weather-container">
        <h1>Weather Finder</h1>
        <input
          type="text"
          placeholder="Enter your city name..."
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <button onClick={showWeather}>Enter to see weather</button>
        <div className="weather-display">
          {weather && <p>Temperature: {weather}°C</p>}
          {humidity !== null && <p>Humidity: {humidity}%</p>}
        </div>
        <div className="weather-icon">
          {icon && (
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="Weather Icon"
              className="icon"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
