import React from "react";
import { useHistory } from "react-router";

export default function ListTripsPage() {
  const history = useHistory();

  const irInicio = () => {
    history.push("/");
  };

  return (
    <div>
      <p>Lista de Viagens</p>
      <button onClick={irInicio}>Ínicio</button>
    </div>
  );
}
