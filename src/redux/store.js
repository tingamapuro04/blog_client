import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import postReducer from "./postsSlice";
import countSlice from "./counterSlice"

export default configureStore({
  reducer: rootReducer
});
