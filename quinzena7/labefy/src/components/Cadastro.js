import axios from "axios";
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
  state = {
    inputValue: "",
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criarPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = { name: this.state.inputValue };

    axios
      .post(url, body, { headers: { Authorization: "andre-pereira-johnson" } })
      .then((resp) => {
        alert("Playlist criada com sucesso");
        this.setState({ inputValue: "" });
      })
      .catch((err) => {
        alert('Possivelmente já existe essa Playlist');
        this.setState({inputValue: ""})
      });
  };

  render() {
    return (
      <div className="showcase">
        <div className="showcase-container">
          <h2>Crie sua Playlist favorita aqui!</h2>
          <InputPlaylist
            value={this.state.inputValue}
            onChange={this.onChangeInput}
            placeholder="Digite aqui o nome da sua Playlist"
          ></InputPlaylist>
          <Botoes>
            <button onClick={this.criarPlaylist} className="btn-primary">Salvar</button>
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
