import React from "react";
import { useHistory } from "react-router";

export default function CreateTripPage() {
  const history = useHistory();

  const irInicio = () => {
    history.push("/");
  };
  return (
    <div>
      <p>Criar nova Viagem</p>
      <button onClick={irInicio}>Ínicio</button>
      <button>Salvar</button>
    </div>
  );
}
