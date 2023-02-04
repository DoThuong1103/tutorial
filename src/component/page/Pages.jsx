import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import ABout from "../about/ABout";
import Services from "../services/Services";
import Blog from "../blog/Blog";
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact";

function Pages() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={ABout} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route path="/about">
                <About />
              </Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Pages;
