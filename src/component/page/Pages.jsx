import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/Home";

function Pages() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="" component={Home} />
          {/* <Route path="/about">
                <About />
              </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Pages;
