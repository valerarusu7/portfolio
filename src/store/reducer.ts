import { combineReducers } from "@reduxjs/toolkit";
import navigationSlice from "./reducers/navigationSlice";

const reducers = combineReducers({
  nav: navigationSlice,
});

export default reducers;
