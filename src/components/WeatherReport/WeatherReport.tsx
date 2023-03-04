import React, {useEffect, FormEvent, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncGetCurrentLocation, asyncGetWeather} from "../../store/action";

import {IWeatherInfo} from "../../store/actionTypes";
import {RootState} from "../../store/store";
import {weatherStateIcons} from "../../mockData/weatherStateIcons";

import WeatherReportMain from "./WeatherReportMain/WeatherReportMain";

import classes from "./WeatherReport.module.scss";
import searchIcon from "../../assets/searchIcon.svg";


const WeatherReport = () => {
  const weather: IWeatherInfo = useSelector((state: RootState) => state.weatherReducer);
  const [isErrorMessage, setIsErrorMessage] = useState(false)
  const dispatch = useDispatch();

  const weatherInfo = useMemo(() => ({
    weatherImage: weather.weather && weatherStateIcons[weather.weather[0].main],
    weatherTemp: weather.main && Math.round(weather.main.temp),
    metcast: weather.weather && weather.weather[0].main,
    humidity: weather.main && weather.main.humidity,
    feelsLike: weather.main && weather.main.feels_like,
    windSpeed: weather.wind && weather.wind.speed,
    pressure: weather.main && weather.main.pressure
  }), [weather])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(asyncGetCurrentLocation(position.coords))
    })
  }, [])

  useEffect(() => {
    if (!!weather.weather) {
      setIsErrorMessage(true)
    } else {
      setIsErrorMessage(false)
    }
  }, [weather])

  const getWeather = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(asyncGetWeather(e.currentTarget.city.value))
    e.currentTarget.city.value = ''
  }

  return (
    <div className={classes.main}>
      <form className={classes.main__form}
            onSubmit={(e: FormEvent<HTMLFormElement>) => getWeather(e)}
      >
        <input
          type="text"
          name="city"
          placeholder="Search your city"
          className={classes.main__form__input}
        />
        <button type="submit" className={classes.main__form__button}>
          <img src={searchIcon} alt="Search"/>
        </button>
      </form>
      <WeatherReportMain
          weather={weather}
          weatherInfo={weatherInfo}
          isErrorMessage={isErrorMessage}
      />
    </div>
  );
};

export default WeatherReport;