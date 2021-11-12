import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import BeforeStart from "../pages/OnBoarding/BeforeStart";
import Notion1 from "../pages/OnBoarding/Notion1";
import Preparing from "../pages/OnBoarding/Preparing";
import MainApp from "./MainApp";

export default function AppRouting() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/before">
            <BeforeStart />
          </Route>
          <Route path="/notion1">
            <Notion1 />
          </Route>
          <Route path="/onboard">
            <Preparing />
          </Route>
          <Route path="/" component={MainApp} />
        </Switch>
      </div>
    </Router>
  );
}
