import {
  ActionMapTypes,
  ASYNC_GET_LOCATION,
  ASYNC_GET_WEATHER,
  GET_WEATHER,
  GET_WEATHER_ERROR,
  PositionCoordType,
  IWeatherInfo
} from "./actionTypes"

export function getWeather(payload: IWeatherInfo): ActionMapTypes["GET_WEATHER"] {
  return {
    type: GET_WEATHER,
    payload
  }
}

export function asyncGetWeather(payload: string): ActionMapTypes["ASYNC_GET_WEATHER"] {
  return {
    type: ASYNC_GET_WEATHER,
    payload
  }
}

export function asyncGetCurrentLocation(payload: PositionCoordType): ActionMapTypes["ASYNC_GET_LOCATION"] {
  return {
    type: ASYNC_GET_LOCATION,
    payload
  }
}

export function getWeatherError(payload: object): ActionMapTypes["GET_WEATHER_ERROR"] {
  return {
    type: GET_WEATHER_ERROR,
    payload
  }
}