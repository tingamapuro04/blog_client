import { combineReducers } from "redux";
import postReducer from "./postsFetch"

const rootReducer = combineReducers({
  posts: postReducer,

});

export default rootReducer;
