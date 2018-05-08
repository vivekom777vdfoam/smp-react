import React, {Component} from 'react';

export default class Navbar extends Component {
  render () {
    return (
      <nav className="main-menu">
        <ul>
          <li><a href="javascript:void(0);">Home</a></li>
          <li><a href="javascript:void(0);">Menu link</a></li>
          <li><a href="javascript:void(0);">Contact Us</a></li>
          <li><a href="javascript:void(0);">About Us</a></li>
        </ul>
      </nav>
    );
  }
}
