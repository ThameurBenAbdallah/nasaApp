import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunk for fetching images from NASA Mars Rover API
export const fetchImagesApod = createAsyncThunk('apod/fetchImagesApod', async () => {
  const response = await axios.get('https://api.nasa.gov/planetary/apod', {
    params: {
      api_key: '4z3x8tVQhP0wR3vc8aQIapLs1eS3x78oEVTk9ykX', 
    },
  });
  return response.data;
});

// Define the Mars Rover slice
const apodSlice = createSlice({
  name: 'apod',
  initialState: { image: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchImages.pending action
    builder.addCase(fetchImagesApod.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle fetchImages.fulfilled action
    builder.addCase(fetchImagesApod.fulfilled, (state, action) => {
      state.loading = false;
      state.image = action.payload;
    });

    // Handle fetchImages.rejected action
    builder.addCase(fetchImagesApod.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default apodSlice.reducer;
