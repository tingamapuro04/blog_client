import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async Thunk action
export const fetchPosts = createAsyncThunk("fetch/allposts", async () => {
  const response = await fetch("http://localhost:3000/api/v1/posts");
  const posts = await response.json();
  return posts;
});

// Slice
const postSlice = createSlice({
  name: "post",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = "Failed";
      });
  },
});

export default postSlice.reducer;
