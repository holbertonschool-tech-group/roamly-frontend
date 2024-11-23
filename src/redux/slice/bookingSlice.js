import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for fetching bookings
export const fetchBookings = createAsyncThunk(
  "hotel/fetchBookings",
  async (_, { rejectWithValue }) => {
    const source = axios.CancelToken.source(); // Create a cancel token
    try {
      const response = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + "orders",
        {
          cancelToken: source.token
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Error fetching bookings:", error);
        return rejectWithValue("Error fetching bookings");
      }
    }
  }
);

const initialState = {
  bookings: [],
  backbookings: [],
  loading: false,
  error: null
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    filterDestinationByTitle: (state, action) => {
      state.bookings = state.bookings.filter(
        (elem) => elem.title === action.payload
      );
    },
    filterDestinationByPrice: (state, action) => {
      state.bookings = state.bookings.filter(
        (elem) => elem.price <= action.payload
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch bookings";
      });
  }
});

// Action creators and reducer export
export const { filterDestinationByTitle, filterDestinationByPrice } =
  hotelSlice.actions;
export default hotelSlice.reducer;
