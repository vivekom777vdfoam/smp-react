import React, {Component} from 'react';
import Navbar from './menu';

export class PreHeader extends Component {
  render () {
    return (
      <div className="pre-header">
        <div className="container">
          <div className="contact-details">
            <a href="tel:+919988899777">+91-9988899777</a>
          </div>
          <div className="">
            <ul>
              <li><a href="javascript:void(0);">FB</a></li>
              <li><a href="javascript:void(0);">G+</a></li>
              <li><a href="javascript:void(0);">Twi</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="javascript:void(0);"><img src="images/logo.png" alt="Logo" /></a>
          </div>
          <Navbar />
        </div>
      </header>
    );
  }
}
