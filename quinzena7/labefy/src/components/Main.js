import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
        <div />
        <div className="showcase">
          <div className="showcase-container">
            <h2>Música para todos</h2>
            <p>
              Milhões de músicas à sua escolha. E nem precisa de cartão de
              crédito.
            </p>
            <div className="buttons">
              <button onClick={this.props.irCadastro} className="btn-primary">
                criar playlists
              </button>
              <button onClick={this.props.irPlaylist} className="btn-primary">
                Ouvir músicas
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
