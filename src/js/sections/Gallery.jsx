import React, { Component } from "react";
import gallery1 from "../../images/gallery-1.png";
import gallery2 from "../../images/gallery-2.png";
import gallery3 from "../../images/gallery-3.png";
import gallery4 from "../../images/gallery-4.png";
import gallery5 from "../../images/gallery-5.png";

class Gallery extends Component {
  render() {
    return (
      <div className="row py-5 gallery">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h1 className="text-center">Gallery</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis nam ipsam beatae, necessitatibus magnam ullam voluptatem
                qui sit reiciendis at omnis iure impedit recusandae
                voluptatibus! Explicabo eaque cupiditate obcaecati sapiente!
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-8">
              <img src={gallery1} alt="" className="img-fluid shadow" />
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col">
                  <img
                    src={gallery2}
                    alt=""
                    className="img-fluid shadow mb-4"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src={gallery3} alt="" className="img-fluid shadow" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img src={gallery4} alt="" className="img-fluid shadow" />
            </div>
            <div className="col-6">
              <img src={gallery5} alt="" className="img-fluid shadow" />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <button className="btn btn-default rounded-0 shadow text-white">
              CLICK ME
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
