import React from "react";
import { useHistory } from "react-router";

export default function LoginPage() {
  const history = useHistory();

  const irInicio = () => {
    history.push("/");
  };

  const entrarLogin = () => {
    history.push("/admin");
  };
  return (
    <div>
      <p>Login</p>
      <button onClick={irInicio}>Ínicio</button>
      <button onClick={entrarLogin}>Entrar</button>
    </div>
  );
}
