import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for fetching destinations
export const fetchDestinations = createAsyncThunk(
  "hotel/fetchDestinations",
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
        console.error("Error fetching destinations:", error);
        return rejectWithValue("Error fetching destinations");
      }
    }
  }
);

const initialState = {
  destinations: [],
  loading: false,
  error: null
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.destinations = action.payload[0].destinations;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch destinations";
      });
  }
});

// Action creators and reducer export
export default hotelSlice.reducer;