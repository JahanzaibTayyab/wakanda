import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../pages/Login";
import MainApp from "./MainApp";

export default function AppRouting() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" component={MainApp} />
        </Switch>
      </div>
    </Router>
  );
}
