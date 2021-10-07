import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import "../styles/ListTrips.css";
import { BsReverseLayoutTextSidebarReverse, BsHouseDoorFill } from "react-icons/bs";

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
      <div className="container__viagens">
        <h2>{cadaViagem.name}</h2>
        <p> {cadaViagem.description} </p>
        <h3> {cadaViagem.planet} </h3>
        <p> Duração em dias: {cadaViagem.durationInDays} </p>
        <p> {cadaViagem.date} </p>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Lista de Viagens</h1>
      <div className="container__botoes">
        <Button onClick={irInicio} variant="contained" startIcon={<BsHouseDoorFill />}>
          Ínicio
        </Button>
        <Button onClick={irFormulario} variant="contained" startIcon={<BsReverseLayoutTextSidebarReverse />}>
          
          Inscrição
        </Button>
      </div>
      {viagens}
    </div>
  );
}
