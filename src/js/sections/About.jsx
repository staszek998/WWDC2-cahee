import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="row about-us">
        <div className="container">
          <div className="row">
            <div className="col-6 about-us__image" />
            <div className="col-6 my-5">
              <h1 className="text-white">About Us</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                aliquid sequi ipsa laboriosam deleniti obcaecati officia ratione
                odit? Rerum cupiditate enim voluptatem sint placeat praesentium
                laborum neque dolor suscipit ab.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                tenetur vitae autem illum recusandae unde laboriosam neque cum
                iste odit delectus odio, quae earum id ex ad explicabo sunt vel?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
