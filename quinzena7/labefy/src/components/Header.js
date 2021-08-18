import React, { Component } from "react";
import "./Header.css";
import Logo from '../image/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          <img
            src={Logo}
            alt="Logo"
            className="logo"
          />
          <h1>LABEFY</h1>
          <ul className="navbar-items">
            <li className="navbar-item">Ajuda</li>
            <li className="navbar-item">Entrar</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
