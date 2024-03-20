import { createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
  name: {
    first: "",
    last: "",
  },
  email: "",
  photo: "",
  age: 26,
  weight: {
    kg: 0,
    lb: 0,
  },
  height: {
    cm: 0,
    ft: 0,
  },
  progress: [
    {
      weight: {
        kg: 0,
        lb: 0,
      },
      date: Date.now(),
    },
  ],
  startDate: Date.now(),
  goal: {
    type: "lose",
    wight: {
      kg: 0,
      lb: 0,
    },
    date: Date.now(),
  },
  workout: {
    workingOut: true,
    howOften: 0,
    type: "strength",
    intencivity: "medium",
  },
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
    // setSignOutState: (state) => {
    //   state.name = null;
    //   state.email = null;
    //   state.photo = null;
    // },
  },
});
