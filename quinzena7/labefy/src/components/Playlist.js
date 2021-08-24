/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";
import axios from "axios";
import Adicionar from "../image/add.png";
import Deletar from "../image/delete.png";

const NomeMusica = styled.p`
  font-size: 16px;
  display: inline-block;
  padding-right: 12px;
`;

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
  margin: 0 8px;
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
  margin-left: 12px;
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
  padding: 10px;
  margin: 8px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:active {
    background-color: black;
  }
`;

const DivInputs = styled.div`
  display: block;
`;

const Inputs = styled.input`
  border: none;
  border-radius: 50px;
  padding: 8px;
  margin: 8px 0;
  width: 80%;
`;

const Tracks = styled.audio`
  display: flex;
  height: 36px;
  margin-bottom: 8px;
  border-radius: 8px;
  width: 450px;
`;

class Playlist extends React.Component {
  state = {
    lista: [],
    track: [],
    nomeMusica: "",
    nomeArtista: "",
    urlMusica: "",
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

  onChangeInputNome = (event) => {
    this.setState({ nomeMusica: event.target.value });
  };

  onChangeInputArtista = (event) => {
    this.setState({ nomeArtista: event.target.value });
  };

  onChangeInputUrl = (event) => {
    this.setState({ urlMusica: event.target.value });
  };

  adicionarTrack = (idPlaylist) => {
    idPlaylist === this.state.exibir
      ? this.setState({ exibir: true }) && this.setState({ exibirSalvar: true })
      : this.setState({ exibir: idPlaylist });
  };

  adicionarMusica = async (idPLaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPLaylist}/tracks`;
    const body = {
      name: this.state.nomeMusica,
      artist: this.state.nomeArtista,
      url: this.state.urlMusica,
    };
    try {
      const res = await axios.post(url, body, {
        headers: { Authorization: "andre-pereira-johnson" },
      });
      this.setState({ nomeMusica: "", nomeArtista: "", urlMusica: "" });
      alert(`Adicionado na Playlist com sucessso`)
      this.adicionarTrack();
    } catch (err) {
      alert(err.message);
    }
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
          <NomeMusica>{musica.name}</NomeMusica>
          {`(${musica.artist})`}
          <Tracks src={musica.url} autoplay="autoplay" controls="controls" />
        </div>
      );
    });

    const listaPlaylist = this.state.lista.map((item) => {
      return (
        <div>
          <CardPlaylist onClick={() => this.exibirTracks(item.id)}>
            <p className="nome-playlist">{item.name}</p>
            <div className="botoes-playlist">
              <BotaoAdicionar
                onChange={this.onChangeInputNome}
                onClick={() => this.adicionarTrack(item.id)}
              >
                <img width="12px" src={Adicionar} />
              </BotaoAdicionar>
              <BotaoDeletar onClick={() => this.deletarPlaylist(item.id)}>
                <img width="12px" src={Deletar} />
              </BotaoDeletar>
            </div>
            <DivInputs>
              {this.state.exibir === item.id ? (
                <Inputs
                  value={this.state.nomeMusica}
                  onChange={this.onChangeInputNome}
                  placeholder="Nome da sua música"
                />
              ) : (
                ""
              )}
              {this.state.exibir === item.id ? (
                <Inputs
                  value={this.state.nomeArtista}
                  onChange={this.onChangeInputArtista}
                  placeholder="Nome do artista"
                />
              ) : (
                ""
              )}
              {this.state.exibir === item.id ? (
                <>
                  <Inputs
                    value={this.state.urlMusica}
                    onChange={this.onChangeInputUrl}
                    placeholder="Url do servidor de música"
                  />
                  <div className="div-music">
                    <button
                      onClick={() => this.adicionarMusica(item.id)}
                      className="btn-music"
                    >
                      Salvar
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </DivInputs>
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
