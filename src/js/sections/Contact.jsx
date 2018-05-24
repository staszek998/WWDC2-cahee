import React, { Component } from "react";
import ContactForm from "../components/ContactForm";

class Contact extends Component {
  render() {
    return (
      <div className="row contact">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <h2 className="text-center mt-5">Contact</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                alias incidunt deleniti quos sint eius culpa asperiores commodi!
                Ipsa, tempora commodi reiciendis numquam architecto quae
                aspernatur pariatur dolores delectus animi?
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-5">
            <div className="col-5">
              <ContactForm />
            </div>
            <div className="col-5">
              <p>
                <strong>ADDRESS</strong>
                <br />
                123 Street, City Name, Postcode, Country
              </p>
              <p>
                <strong>E-MAIL</strong>
                <br />
                address@domain.com
              </p>
              <p>
                <strong>PHONE</strong>
                <br />
                +01 23456789
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
