/* eslint-disable default-case */
import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    tela: "cadastroPlaylist",
  };

  irCadastro = () => {
    switch (this.state.tela) {
      case "cadastroPlaylist":
        return alert("Página não encontrada");
      case "inicial":
        return <App />;
      default:
        return <div>Página não encontrada</div>;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="showcase">
          <div className="showcase-container">
            <h2>Música para todos</h2>
            <p>
              Milhões de músicas à sua escolha. E nem precisa de cartão de
              crédito.
            </p>
            <div className="buttons">
              <button
                onClick={this.irCadastro}
                value={this.state.tela}
                className="btn-primary"
              >
                Iniciar Cadastro
              </button>
              <button
                onClick={this.irCadastro}
                value={this.state.tela}
                className="btn-primary"
              >
                Playlists
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
