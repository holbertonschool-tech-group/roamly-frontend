import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for fetching contact
export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async (_, { rejectWithValue }) => {
    const source = axios.CancelToken.source(); // Create a cancel token
    try {
      const response = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + "contact",
        {
          cancelToken: source.token
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Error fetching contact:", error);
        return rejectWithValue("Error fetching contact");
      }
    }
  }
);

const initialState = {
  contact: [],

  loading: false,
  error: null
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch contact";
      });
  }
});
export const { filterHotelsByPrice, filterHotelsByName, resetFilters } =
  contactSlice.actions;
// Action creators and reducer export
export default contactSlice.reducer;
