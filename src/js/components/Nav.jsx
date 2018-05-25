import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <a href="#" className="navbar-brand logo">
            Cahee
          </a>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
