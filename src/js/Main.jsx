import React, { Component } from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <About />
        <Services />
        <Gallery />
      </div>
    );
  }
}

export default Main;
