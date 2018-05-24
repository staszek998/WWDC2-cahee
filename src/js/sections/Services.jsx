import React, { Component } from "react";
import onlineShopping from "../../icons/services/online-shopping.png";
import qualityProduct from "../../icons/services/quality-product.png";
import delivery from "../../icons/services/domestic-&-insternational-delivery.png";
import wellOrganised from "../../icons/services/well-organised.png";
import ServiceItem from "../components/ServiceItem";

class Services extends Component {
  render() {
    return (
      <div className="row services">
        <div className="container">
          <div className="row py-5">
            <div className="col-6">
              <ServiceItem text="Online Shopping" icon={onlineShopping} />
              <ServiceItem text="Quality Product" icon={qualityProduct} />
              <ServiceItem
                text="Domestic & International Delivery"
                icon={delivery}
              />
              <ServiceItem text="Well Organised" icon={wellOrganised} />
            </div>
            <div className="col-6 services__image d-flex justify-content-center align-items-center">
              <h1 className="text-white">Our Services</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
