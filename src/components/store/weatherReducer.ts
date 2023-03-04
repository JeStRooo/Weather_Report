import {ActionType, IWeatherInfo} from "./actionTypes";

const defaultState = {}

export const weatherReducer = (state = defaultState, action: ActionType): IWeatherInfo => {
  switch (action.type) {
    case "GET_WEATHER":
      return action.payload

    case "GET_WEATHER_ERROR":
      return action.payload

    default:
      return state
  }
}