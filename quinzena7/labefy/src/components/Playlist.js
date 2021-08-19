/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";
import axios from "axios";

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
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  &:hover {
    color: white;
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
  height: 60px;
  width: 450px;
`;

class Playlist extends React.Component {
  state = {
    lista: [],
    track: [],
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

  exibirTracks = async (idPlaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`;
    try {
      const res = await axios.get(url, {
        headers: { Authorization: "andre-pereira-johnson" },
      });
      this.setState({ track: res.data.result.tracks });
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
            <BotaoDeletar onClick={() => this.deletarPlaylist(item.id)}>
              x
            </BotaoDeletar>
          </CardPlaylist>
          <div className="showcase-container">{musicas}</div>
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
