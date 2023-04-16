import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunk for fetching images from NASA Mars Rover API
export const fetchImages = createAsyncThunk('marsRover/fetchImages', async () => {
  const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
    params: {
      sol: 1000, 
      api_key: '4z3x8tVQhP0wR3vc8aQIapLs1eS3x78oEVTk9ykX', 
    },
  });
  return response.data;
});

// Define the Mars Rover slice
const marsRoverSlice = createSlice({
  name: 'marsRover',
  initialState: { images: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchImages.pending action
    builder.addCase(fetchImages.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle fetchImages.fulfilled action
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loading = false;
      state.images = action.payload.photos;
    });

    // Handle fetchImages.rejected action
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default marsRoverSlice.reducer;
