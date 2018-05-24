import React, { Component } from "react";
import Header from "./sections/Header";
import About from "./sections/About";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <About />
      </div>
    );
  }
}

export default Main;
