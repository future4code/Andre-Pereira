import React from "react";
import { useHistory } from "react-router";
import "../styles/Home.css";
import Button from "@mui/material/Button";
import { FaRocket } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";



export default function HomePage() {
  const history = useHistory();

  const irListaViagens = () => {
    history.push("/list-trips");
  };

  const irFormulario = () => {
    history.push("/form");
  };

  return (
    <div className="container__home">
      <h2>
        “Uma das grandes revelações da exploração espacial é a imagem da Terra,
        finita e solitária acomodando toda a espécie humana através dos oceanos
        do tempo e do espaço.”
      </h2>
      <p>VENHA EXPLORAR O UNIVERSO</p>
      <div className="container__botoes">
        <Button onClick={irListaViagens} variant="contained" startIcon={<FaRocket />} >Viagens</Button>
        <Button onClick={irFormulario} variant="contained"startIcon={<MdCardTravel />}>Inscrição de Viagem</Button>
      </div>
    </div>
  );
}
