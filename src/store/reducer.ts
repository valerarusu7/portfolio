import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";

const reducers = combineReducers({
  auth: authSlice,
});

export default reducers;
