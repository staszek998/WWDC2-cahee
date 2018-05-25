import React, { Component } from "react";

class Subscribe extends Component {
  render() {
    return (
      <div className="row py-5 subscribe">
        <div className="container d-flex align-items-center">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <h1>Subscibe to our Newsletter</h1>
              </div>
              <div className="row">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos quas itaque quisquam accusamus minus iste est ipsa
                  expedita ab cumque doloribus aperiam velit inventore
                  repudiandae deserunt, fugiat adipisci minima placeat!
                </p>
              </div>
              <div className="row">
                <div className="col p-0">
                  <form action="submit" className="form-inline">
                    <div className="col-8 p-0">
                      <input
                        type="email"
                        placeholder="Enter your e-mail address"
                        className="form-control rounded-0"
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="submit"
                        className="btn btn-default text-white rounded-0 shadow"
                        value="SUBSCRIBE"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
