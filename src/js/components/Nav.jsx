import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar py-5">
        <a href="#" className="navbar-brand">
          Cahee
        </a>

        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              SERVICES
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              GALLERY
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              BLOG
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
