import React, { Component } from "react";
import styled from "styled-components";

const BotaoVoltar = styled.button`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

class Playlist extends Component {
  render() {
    return (
      <div className="showcase">
        <div className="showcase-container">
          <h2>Minhas Playlists Favoritas</h2>
          <BotaoVoltar onClick={this.props.irInicio} className="btn-primary">
            Voltar
          </BotaoVoltar>
        </div>
      </div>
    );
  }
}

export default Playlist;
