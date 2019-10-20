import {  createStore, combineReducers } from "redux"
import todo from "./todo"
import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({
  todo,
  visibilityFilter
})

export type AppState = ReturnType<typeof reducer>

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

(window as any).store = store

export default store