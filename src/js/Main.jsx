import React, { Component } from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Subscribe from "./sections/Subscribe";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <About />
        <Services />
        <Gallery />
        <Subscribe />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
