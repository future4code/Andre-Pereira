import React from "react";
import { useHistory } from "react-router";

export default function AdminHomePage() {
  const history = useHistory();

  const irInicio = () => {
    history.push("/");
  };

  const irDetalhes = () => {
    history.push("/detalhe");
  };

  const criarViagem = () => {
    history.push("/criar-viagem");
  };

  return (
    <div>
      <p>Administração</p>
      <button onClick={irInicio}>Ínicio</button>
      <button onClick={criarViagem}>Criar Viagem</button>
      <button onClick={irDetalhes}>Detalhes</button>
    </div>
  );
}
