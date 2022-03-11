import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

export type InterviewState = {
  active: string;
};

const initialState: InterviewState = {
  active: "#",
};

export const navigationSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});

export const selectNav = (state: RootState) => state.nav;

export const { setActive } = navigationSlice.actions;
export default navigationSlice.reducer;
