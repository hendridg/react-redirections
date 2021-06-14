import { createStore, combineReducers } from "redux"
import menuReducer from "./menuReducer"

const rootReducer = combineReducers({
  menu: menuReducer,
})

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState())
})

export default store
