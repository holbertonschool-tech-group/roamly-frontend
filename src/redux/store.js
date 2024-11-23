import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../redux/slice/hotelSlice";
import destinationReducer from "../redux/slice/destinationSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    destination: destinationReducer
  }
});
