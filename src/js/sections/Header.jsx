import React, { Component } from "react";
import scroll from "../../icons/scroll.png";
import Nav from "../components/Nav";

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="container">
          <Nav />
          <dvic className="row compensator" />
          <div className="row mt-5">
            <div className="col-4">
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
              <button className="btn btn-default rounded-0 text-white shadow mb-5">
                CLICK ME
              </button>
            </div>
          </div>
          <div className="row my-5 justify-content-center my-5">
            <img src={scroll} alt="Scroll icon" className="my-5" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
