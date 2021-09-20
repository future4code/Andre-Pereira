import React from "react";
import "./Header.css";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import { BsFillPersonFill } from "react-icons/bs";
export default function Header() {
  const history = useHistory();

  const irInicio = () => {
    history.push("/login");
  };
  return (
    <div className="header">
      <h1>LabeX</h1>
      <Button onClick={irInicio} variant="contained" color="primary" startIcon={<BsFillPersonFill />}>
        Login
      </Button>
    </div>
  );
}
