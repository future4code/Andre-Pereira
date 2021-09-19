import React from "react";
import { useHistory } from "react-router";

export default function HomePage() {
  const history = useHistory();

  const irListaViagens = () => {
    history.push("/list-trips");
  };

  const irFormulario = () => {
    history.push("/form");
  };

  return (
    <div>
      <p>Home Page</p>
      <button onClick={irListaViagens}>Lista de Viagens</button>
      <button onClick={irFormulario}>Formulario de Viagem</button>
    </div>
  );
}
