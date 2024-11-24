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
  reducers: {
    filterHotelsByPrice: (state, action) => {
      state.hotels = state.hotels.filter((elem) => elem.price < action.payload);
    },
    filterHotelsByName: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.hotels = state.hotels.filter((elem) =>
        elem.title.toLowerCase().includes(searchTerm)
      );
    }
  },
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
export const { filterHotelsByPrice, filterHotelsByName } = hotelSlice.actions;
// Action creators and reducer export
export default hotelSlice.reducer;
