import { combineReducers } from "redux";
import postReducer from "./postsSlice";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
