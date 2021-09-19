import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

export default function ListTripsPage() {
  const history = useHistory();
  const [listaViagens, setListaViagens] = useState([]);

  const irInicio = () => {
    history.push("/");
  };

  const irFormulario = () => {
    history.push("/form");
  };

  const listarViagens = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-pereira-johnson/trips"
      );
      setListaViagens(response.data.trips);
    } catch {
      alert("Deu erro");
    }
  };

  useEffect(() => {
    listarViagens();
  }, []);

  const viagens = listaViagens.map((cadaViagem) => {
    return (
      <div>
        <h2>{cadaViagem.name}</h2>
        <p> {cadaViagem.description} </p>
        <p> {cadaViagem.planet} </p>
        <p> Duração em dias: {cadaViagem.durationInDays} </p>
        <p> {cadaViagem.description} </p>
        <p> {cadaViagem.date} </p>
      </div>
    );
  });

  return (
    <div>
      <p>Lista de Viagens</p>
      <button onClick={irInicio}>Ínicio</button>
      <button onClick={irFormulario}>Inscrição para Viagem</button>
      {viagens}
    </div>
  );
}
