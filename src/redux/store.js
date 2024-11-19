import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../redux/slice/hotelSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelReducer
  }
});
