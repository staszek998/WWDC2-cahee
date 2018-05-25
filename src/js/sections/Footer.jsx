import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="row footer">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center py-3">
            <div className="col-4">
              <span className="text-white">
                &copy; 2018 Company Name. All rights reserved.
              </span>
            </div>
            <div className="col-2">
              <h2 className="text-white logo-small">Cahee</h2>
            </div>
            <div className="col-4">
              <span className="text-white">
                Made with <span className="red">love</span> by Stanislaw Gregor
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
