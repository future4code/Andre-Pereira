/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";
import axios from "axios";
import Adicionar from "../image/add.png";
import Deletar from "../image/delete.png";

const BotaoVoltar = styled.button`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const BotaoDeletar = styled.button`
  background-color: #f44336; /* Green */
  border: none;
  border-radius: 4px;
  color: black;
  padding: 8px;
  font-size: 12px;
  &:hover {
    background: #f44500;
    cursor: pointer;
  }
`;

const BotaoAdicionar = styled.button`
  background-color: #1ed760;
  border: none;
  border-radius: 4px;
  color: black;
  padding: 8px;
  margin: 0 8px;
  &:hover {
    background: #1db958;
    cursor: pointer;
  }
`;

const CardPlaylist = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  border: 1px solid black;
  border-radius: 30px;
  padding: 30px;
  margin: 10px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:active {
    background-color: black;
  }
`;

const Tracks = styled.audio`
  display: flex;
  height: 32px;
  margin-bottom: 12px;
  border-radius: 8px;
  width: 450px;
`;

class Playlist extends React.Component {
  state = {
    lista: [],
    track: [],
    name: "",
  };

  componentDidMount() {
    this.exibirPlaylists();
  }

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    if (confirm("Deseja realmente excluir essa Playlist?")) {
      axios
        .delete(url, {
          headers: { Authorization: "andre-pereira-johnson" },
        })
        .then((res) => {
          this.exibirPlaylists();
        })
        .catch((err) => {
          alert("Ocorreu um erro ao excluir, tente novamente");
        });
    }
  };

  exibirPlaylists = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    try {
      const res = await axios.get(url, {
        headers: { Authorization: "andre-pereira-johnson" },
      });
      this.setState({ lista: res.data.result.list });
    } catch (err) {
      alert(err);
    }
  };

  onChangeInput = (event) => {
    this.setState({ nomeMusica: event.target.value });
  };

  adicionarTrack = (idPlaylist) => {
    alert(`ID da Playlist: ${idPlaylist}, Implementação pendentes`);
  };

  exibirTracks = async (idPlaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`;
    try {
      const res = await axios.get(url, {
        headers: { Authorization: "andre-pereira-johnson" },
      });
      this.setState({
        track: res.data.result.tracks,
        idPlaylistSelecionada: idPlaylist,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    const musicas = this.state.track.map((musica) => {
      return (
        <div>
          {`NOME: ${musica.name} - ARTISTA: ${musica.artist}`}
          <Tracks src={musica.url} autoplay="autoplay" controls="controls" />
        </div>
      );
    });

    const listaPlaylist = this.state.lista.map((item) => {
      return (
        <div>
          <CardPlaylist onClick={() => this.exibirTracks(item.id)}>
            {item.name}
            <div className="botoes-playlist">
              <BotaoAdicionar
                onChange={this.onChangeInput}
                onClick={() => this.adicionarTrack(item.id)}
              >
                <img width="12px" src={Adicionar} />
              </BotaoAdicionar>
              <BotaoDeletar onClick={() => this.deletarPlaylist(item.id)}>
                <img width="12px" src={Deletar} />
              </BotaoDeletar>
            </div>
          </CardPlaylist>
          {this.state.idPlaylistSelecionada === item.id ? (
            <div className="showcase-container">{musicas}</div>
          ) : (
            ""
          )}
        </div>
      );
    });

    return (
      <div className="showcase">
        <div className="showcase-container">
          <h2>Playlists Favoritas</h2>
          <div>{listaPlaylist}</div>
          <BotaoVoltar onClick={this.props.irInicio} className="btn-primary">
            Voltar
          </BotaoVoltar>
        </div>
      </div>
    );
  }
}

export default Playlist;
