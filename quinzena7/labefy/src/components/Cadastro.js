import React, { Component } from "react";
import styled from "styled-components";

const Botoes = styled.div`
  display: flex;
  margin: 10px;
`;

const BotaoVoltar = styled.button`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const InputPlaylist = styled.input`
  margin: 26px 0;
  border: 0;
  border-radius: 500px;
  color: #000;
  height: 40px;
  padding: 6px 48px;
  text-overflow: ellipsis;
  width: 80%;
`;

class Cadastro extends Component {
  render() {
    return (
      <div className="showcase">
        <div className="showcase-container">
          <h2>Crie sua Playlist favorita aqui!</h2>
          <InputPlaylist placeholder="Digite aqui o nome da sua Playlist"></InputPlaylist>
          <Botoes>
            <button className="btn-primary">Salvar</button>
            <BotaoVoltar onClick={this.props.irInicio} className="btn-primary">
              Ínicio
            </BotaoVoltar>
          </Botoes>
        </div>
      </div>
    );
  }
}

export default Cadastro;
