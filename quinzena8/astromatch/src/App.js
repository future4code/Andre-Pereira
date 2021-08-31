/* eslint-disable no-fallthrough */
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import CartaoPessoa from "react-tinder-card";
import BotaoSwipe from "./components/BotaoSwipe";

const App = (props) => {
  const [paginaEscolhida, setPaginaEscolhida] = useState("inicio");
  const [pessoaEscolhida, setPessoaEscolhida] = useState([]);

  const [pessoa, setPessoa] = useState([
    useEffect(() => {
      axios
        .get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre-pereira/person"
        )
        .then((response) => {
          setPessoa(response.data.profile);
        })
        .catch((err) => {
          alert(err.message);
        });
    }, []),
  ]);

  const irTelaMatch = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/matches"
      );
      setPaginaEscolhida("matches");
      setPessoaEscolhida(response.data.matches);
    } catch (err) {
      alert(err.message);
    }
  };

  const voltarInicio = () => {
    setPaginaEscolhida("inicio");
  };

  return (
    <>
      <Header irTelaMatch={irTelaMatch} voltarInicio={voltarInicio} />
      {paginaEscolhida === "inicio" ? (
        <>
          <div className="cartao__tinder">
            <div className="cartaoTinder__container">
              <CartaoPessoa className="swipe" preventSwipe={["up", "down"]}>
                <div
                  className="cartao"
                  style={{ backgroundImage: `url(${pessoa.photo})` }}
                >
                  <h2>{pessoa.name}</h2>
                  <h3>{`Idade: ${pessoa.age} anos`}</h3>
                  <h4>{`"${pessoa.bio}"`}</h4>
                </div>
              </CartaoPessoa>
            </div>
          </div>
          <BotaoSwipe />
        </>
      ) : (
        pessoaEscolhida.map((cadaPessoa) => {
          return (
            <div className="matches">
              <img src={cadaPessoa.photo} alt={cadaPessoa.name} />
              <h1>{cadaPessoa.name}</h1>
              <h3>{`${cadaPessoa.age} anos`}</h3>
            </div>
          );
        })
      )}
    </>
  );
};

export default App;
