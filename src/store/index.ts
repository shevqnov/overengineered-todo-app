import {  createStore, combineReducers } from "redux"
import todo from "./todo"

const reducer = combineReducers({
  todo
})

export type AppState = ReturnType<typeof reducer>

const store = createStore(reducer);

(window as any).store = store

export default store