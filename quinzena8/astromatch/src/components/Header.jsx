import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import { IconButton } from "@material-ui/core";

const Header = (props) => {
  const enviarChat = () => {
    alert("...aguarde em breve, implementação em desenvolvimento");
  };

  return (
    <div className="header">
      <IconButton>
        <PersonIcon
          onClick={props.irTelaMatch}
          className="header__icon"
          fontSize="large"
        />
      </IconButton>
      <IconButton onClick={props.voltarInicio}>
        <img
          className="header__logo"
          src="https://image.flaticon.com/icons/png/512/408/408790.png"
          alt="Logo Astromatch"
        />
      </IconButton>
      <IconButton>
        <ChatIcon
          onClick={enviarChat}
          className="header__icon"
          fontSize="large"
        />
      </IconButton>
    </div>
  );
};

export default Header;
