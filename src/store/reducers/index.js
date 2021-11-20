import { combineReducers } from "redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotionAuth from "./NotionAuth";
import Preparing from "./Preparing";

const rootReducer = combineReducers({
  SignIn,
  SignUp,
  NotionAuth,
  Preparing,
});
export default rootReducer;
