import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <form action="submit" className="form-group">
        <input
          type="text"
          className="form-control mb-1 rounded-0 border-0"
          placeholder="Name"
        />
        <input
          type="tel"
          className="form-control mb-1 rounded-0 border-0"
          placeholder="Phone number"
        />
        <input
          type="email"
          className="form-control mb-1 rounded-0 border-0"
          placeholder="E-mail address"
        />
        <textarea
          className="form-control mb-1 rounded-0 border-0"
          rows="10"
          placeholder="Message"
        />
        <input
          type="submit"
          className="form-contro btn btn-default rounded-0 mb-5 border-0"
          value="SEND"
        />
      </form>
    );
  }
}

export default ContactForm;
