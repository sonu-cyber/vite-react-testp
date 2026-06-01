import WeatherItem from "./WeatherItem";
import { useState } from "react";

export default function WeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function getDateTime() {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    setDate(date);
    setTime(time);
    console.log("date,time,date-time", date, time);
  }

  function getWeatherData() {
    try {
      if (!loading) {
        setLoading(true);
      }
      if (error) {
        setError(null);
      }
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,is_day,precipitation,showers,rain"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("data from OpenWeather", data);

          console.log("Latitude:", data.latitude);
          console.log("Longitude:", data.longitude);
          return setWeatherData(data);
        });
    } catch (error) {
      console.log("error", error);
      setError(
        error.message || "An error occurred while fetching weather data."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col text-[20px] pt-5 mt-10 ">
      <h1 className="flex text-center ml-2 text-2xl mb-20 text-amber-700 sm:md:text-3xl sm:md:justify-center lg:xl:2xl:text-4xl sm:md:lg:xl:2xl:pl-10 ">
        {" "}
        Weather Data Page
      </h1>
      <section className="flex min-w-80 px-2 text-left text-wrap mb-75 z-100 sm:text-xl sm:text-slate-800 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
        Get weather data from https://open-meteo.com/. The API provides current
        weather data, hourly forecasts, and daily forecasts for any location on
        Earth. The API is free to use and does not require an API key. The API
        is easy to use and provides accurate weather data. The API is a great
        resource for developers who want to build weather applications or
        integrate weather data into their existing applications.
      </section>

      <button
        className="flex bg-amber-600 w-fit p-1 h-10 mt-0 mb-1 justify-center items-center text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
        onClick={() => getWeatherData()}
      >
        Get Weather Data
      </button>
      <br />
      <button
        className="flex w-fit p-2 h-10 mt-1 mb-1 justify-center align-middle text-amber-100 bg-green-600 rounded"
        onClick={() => getDateTime()}
      >
        Click for Date & Time
      </button>
      <p>Today's Date:{date}</p>
      <p>Current Time:{time}</p>
      <WeatherItem weatherData={weatherData} />
    </div>
  );
}
