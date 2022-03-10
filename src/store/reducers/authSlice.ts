import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

export type InterviewState = {
  user: string;
};

const initialState: InterviewState = {
  user: "user",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
