import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postsFetch = createAsyncThunk('fetch/allposts', async() => {
  const response = await fetch("http://localhost:3000/api/v1/posts");
  const posts = await response.json();
  return posts;
})