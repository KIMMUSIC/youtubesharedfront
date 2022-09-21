import { combineReducers } from "redux";
import userReducer from "./userReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  user : userReducer
});

export default rootReducer;