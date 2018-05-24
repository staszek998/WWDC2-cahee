import React, { Component } from "react";

class ServiceItem extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row service__item my-1 py-2 shadow bg-white">
            <div className="col-9 align-self-center">
              <span  >{this.props.text}</span>
            </div>
            <div className="col-3 align-self-center">
              <img src={this.props.icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceItem;
