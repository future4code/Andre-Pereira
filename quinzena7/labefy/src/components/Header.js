import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          <img
            src="https://image.flaticon.com/icons/png/512/1946/1946479.png"
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
