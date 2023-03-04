import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import {getLocationWatcher, submitWatcher} from "./getWeatherSaga";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {weatherReducer} from "./weatherReducer";

function* rootSaga() {
  yield all([submitWatcher(), getLocationWatcher()])
}

const sagaMiddleWare = createSagaMiddleware()
const rootReducer = combineReducers({weatherReducer})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleWare.run(rootSaga)