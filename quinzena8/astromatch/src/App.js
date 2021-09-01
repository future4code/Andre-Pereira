/* eslint-disable no-fallthrough */
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import CartaoPessoa from "react-tinder-card";
import BotaoSwipe from "./components/BotaoSwipe";

const App = () => {
  const [paginaEscolhida, setPaginaEscolhida] = useState("inicio");
  const [pessoaEscolhida, setPessoaEscolhida] = useState([]);
  const [pessoa, setPessoa] = useState([]);
  const [atualizador, setAtualizador] = useState(false);

  useEffect(() => {
    console.log("entrou");
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre-pereira/person"
      )
      .then((response) => {
        console.log("Passou");
        setPessoa(response.data.profile);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [atualizador]);

  const selecionarPessoa = (id) => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre-pereira/choose-person",
        {
          id: pessoa.id,
          choice: true,
        }
      )
      .then((res) => {
        setAtualizador(!atualizador);
        alert(`Você deu Match em ${pessoa.name}`);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const removerPessoa = (id) => {
    axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre-pereira/choose-person",
      {
        id: pessoa.id,
        choice: false,
      }
    ).then(response => {
      setAtualizador(!atualizador)
      alert(`Acho que você não gostou do(a) ${pessoa.name}`)
    })
  };

  const irTelaMatch = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre-pereira/matches"
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

  const reiniciarMatches = async () => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Voce deseja reiniciar os seus Matches?")){
      try {
        const res = await axios.put(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre-pereira/clear"
        );
        setAtualizador(!atualizador);
        alert(`Você acabou de reiniciar os matches com ${res.data.message}`);
      } catch (err) {
        alert(err.message);
      }
    }
    
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
          <BotaoSwipe
            selecionarPessoa={selecionarPessoa}
            reiniciarMatches={reiniciarMatches}
            removerPessoa={removerPessoa}
          />
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
