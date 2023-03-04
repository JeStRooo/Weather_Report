import {put, takeEvery, call} from "redux-saga/effects";
import {ActionType, ASYNC_GET_LOCATION, ASYNC_GET_WEATHER} from "./actionTypes";
import {getWeather, getWeatherError} from "./action";

const ApiKey = '332a956d69f5d90fb1a571aa6cc9606b';

function* getNewWeatherWorker(action: ActionType): object {
  const weatherApi = () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&units=metric&appid=${ApiKey}`)
  const data = yield call(weatherApi)
  const json = yield call(() => new Promise(res => res(data.json())))
  try {
    yield put(getWeather(json))
  } catch {
    yield put(getWeatherError({}))
  }
}

function* getCurrentWeatherWorker(action: any): object {
  const weatherApi = () => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${action.payload.latitude}&lon=${action.payload.longitude}&units=metric&&appid=${ApiKey}`)
  const data = yield call(weatherApi)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(getWeather(json))
}

export function* submitWatcher() {
  yield takeEvery(ASYNC_GET_WEATHER, getNewWeatherWorker)
}

export function* getLocationWatcher() {
  yield takeEvery(ASYNC_GET_LOCATION, getCurrentWeatherWorker)
}
