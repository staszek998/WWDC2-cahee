import React, { Component } from "react";
import scroll from "../../icons/scroll.png";

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="container">
          <nav className="navbar py-5">
            <a href="#" className="navbar-brand">
              Cahee
            </a>
            <a href="#" className="navbar-link">
              HOME
            </a>
            <a href="#" className="navbar-link">
              ABOUT
            </a>
            <a href="#" className="navbar-link">
              SERVICES
            </a>
            <a href="#" className="navbar-link">
              GALLERY
            </a>
            <a href="#" className="navbar-link">
              BLOG
            </a>
            <a href="#" className="navbar-link">
              CONTACT
            </a>
          </nav>
          <div className="row mt-5">
            <div className="col-3">
              <h1>Fresh Life</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates delectus officia fugit dignissimos molestias commodi.
                Iste modi voluptatibus omnis? Facere veniam illum dolores
                nostrum repudiandae ab cupiditate tempore quaerat voluptatem.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-2">
              <button className="btn btn-default">CLICK ME</button>
            </div>
          </div>
          <div className="row my-5 justify-content-center">
            <img src={scroll} alt="Scroll icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
