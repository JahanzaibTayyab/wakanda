import { combineReducers } from "redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotionAuth from "./NotionAuth";

const rootReducer = combineReducers({
  SignIn,
  SignUp,
  NotionAuth,
});
export default rootReducer;
