import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for fetching hotels
export const fetchHotels = createAsyncThunk(
  "hotel/fetchHotels",
  async (_, { rejectWithValue }) => {
    const source = axios.CancelToken.source(); // Create a cancel token
    try {
      const response = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + "hotels",
        {
          cancelToken: source.token
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Error fetching hotels:", error);
        return rejectWithValue("Error fetching hotels");
      }
    }
  }
);

const initialState = {
  hotels: [],
  loading: false,
  error: null
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch hotels";
      });
  }
});

// Action creators and reducer export
export default hotelSlice.reducer;
