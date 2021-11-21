import { combineReducers } from "redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotionAuth from "./NotionAuth";
import Dashboard from "./Dashboard";

const rootReducer = combineReducers({
  SignIn,
  SignUp,
  NotionAuth,
  Dashboard,
});
export default rootReducer;
