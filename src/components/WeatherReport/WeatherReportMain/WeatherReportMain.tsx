import React from 'react';

import OtherWeatherInfo from "../OtherWeatherInfo/OtherWeatherInfo";

import classes from "../WeatherReport.module.scss";
import Wind from "../../assets/Wind.svg";
import Humidity from "../../assets/Humidity.svg";
import Pressure from "../../assets/Pressure.svg";
import pageNotFound from "../../assets/page-not-found.gif";

type WeatherInfoType = {
  weather: any,
  weatherInfo: any,
  isErrorMessage: boolean
}

const WeatherReportMain = ({weather, weatherInfo, isErrorMessage}: WeatherInfoType) => {
  return (
    <>
      {isErrorMessage ? (
          <div className={classes.main__weather_info}>
            <h1 className={classes.main__weather_info__city_name}>
              {weather.name}
            </h1>
            <div className={classes.main__weather_info__temp}>
              <div className={classes.main__weather_info__temp__weather}>
                <img
                  src={weatherInfo.weatherImage}
                  className={classes.main__weather_info__temp__weather__img}
                  alt="weather icon"
                />
                <span className={classes.main__weather_info__temp__weather__metcast}>
                  {weatherInfo.metcast}
                </span>
              </div>
              <div className={classes.main__weather_info__temp__info_temp}>
                <span
                  className={classes.main__weather_info__temp__info_temp__temp}
                >
                  {weatherInfo.weatherTemp}°
                </span>
                <span
                  className={classes.main__weather_info__temp__info_temp__feels_like}
                >
                  Feels like: <span
                  style={{font: "normal 23px/25px Poppins, sans-serif", color: 'black'}}>
                      {weatherInfo.feelsLike}°
                  </span>
                </span>
              </div>
            </div>
            <div className={classes.main__weather_info__other_weather_info}>
              <OtherWeatherInfo
                name="Wind"
                value={`${weatherInfo.windSpeed} km/h`}
                image={Wind}
              />
              <OtherWeatherInfo
                name="Humidity"
                value={`${weatherInfo.humidity}%`}
                image={Humidity}
              />
              <OtherWeatherInfo
                name="Pressure"
                value={`${weatherInfo.pressure} mbar`}
                image={Pressure}
              />
            </div>
          </div>
        )
        : (
          <>
            <div className={classes.main__error_text}>This city was not found</div>
            <img src={pageNotFound} className={classes.main__error_img} alt="Oops! Not found"/>
          </>
        )
      }
    </>
  );
};

export default WeatherReportMain;