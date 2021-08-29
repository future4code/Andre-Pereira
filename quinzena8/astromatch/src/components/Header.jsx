import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/match">
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
      <Link to="/">
        <img
          className="header__logo"
          src="https://image.flaticon.com/icons/png/512/408/408790.png"
          alt="Logo Astromatch"
        />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ChatIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
