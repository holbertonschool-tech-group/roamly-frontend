import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for fetching destinations
export const fetchDestinations = createAsyncThunk(
  "hotel/fetchDestinations",
  async (_, { rejectWithValue }) => {
    const source = axios.CancelToken.source(); // Create a cancel token
    try {
      const response = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + "destinations",
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
  backdestinations: [],
  loading: false,
  error: null
};

export const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    filterDestinationByTitle: (state, action) => {
      const searchTerm = action.payload.trim().toLowerCase(); // trim and convert search term to lowercase
      if (searchTerm === "") {
        // If the search term is empty, don't filter and return all data
        return;
      }
      state.destinations = state.destinations.filter(
        (elem) => elem.title && elem.title.toLowerCase().includes(searchTerm) // ensure elem.title is defined
      );
    },
    filterDestinationByPrice: (state, action) => {
      state.destinations = state.destinations.filter(
        (elem) => elem.price < action.payload
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.destinations = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch destinations";
      });
  }
});

// Action creators and reducer export
export const { filterDestinationByTitle, filterDestinationByPrice } =
  destinationsSlice.actions;
export default destinationsSlice.reducer;
