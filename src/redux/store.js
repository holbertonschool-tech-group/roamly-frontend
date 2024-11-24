import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../redux/slice/hotelSlice";
import destinationReducer from "../redux/slice/destinationSlice";
import bookingsReducer from "../redux/slice/bookingSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    destination: destinationReducer,
    bookings: bookingsReducer
  }
});
