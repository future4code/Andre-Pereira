/* eslint-disable default-case */
import React, { Component } from "react";
import Main from "./components/Main";
import Cadastro from "./components/Cadastro";
import Playlist from "./components/Playlist";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";

const Pagina = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

class App extends Component {
  state = {
    tela: "inicial",
  };

  escolherTelas = () => {
    switch (this.state.tela) {
      case "inicial":
        return <Main irCadastro={this.irCadastro} irPlaylist={this.irPlaylist} />;
      case "cadastro":
        return (
          <Cadastro irInicio={this.irInicio}  />
        );
      case "playlist":
        return <Playlist irInicio={this.irInicio}/>;
      default:
        return (
          <Pagina>
            <h1>Página não encontrada</h1>
          </Pagina>
        );
    }
  };

  irInicio = () => {
    this.setState({ tela: "inicial" });
  };

  irCadastro = () => {
    this.setState({ tela: "cadastro" });
  };

  irPlaylist = () => {
    this.setState({ tela: "playlist" });
    console.log("indo para playlist");
  };

  render() {
    return (
      <div>
        <Header />
        {this.escolherTelas()}
      </div>
    );
  }
}
export default App;
