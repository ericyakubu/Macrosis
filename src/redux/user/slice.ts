import { createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
  name: null,
  email: null,
  photo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});
