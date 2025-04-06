import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});


export * from "./thunks/fetchUser"
export * from "./thunks/addUser"