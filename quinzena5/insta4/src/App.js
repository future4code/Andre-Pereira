import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import FotoAnderson from "./img/anderson.jpeg";
import FotoAndre from "./img/andre.jpeg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 10px;
  border-style: none;
  outline-style: inset ;
`;
class App extends React.Component {
  state = {
    postagens: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "André Luiz",
        fotoUsuario:
          "https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_200_200/0/1601901713243?e=1632355200&v=beta&t=TOp1AFF2YUZG6C3D-Spk5BEERn3uu0plYufOBHzztVo",
        fotoPost: FotoAndre,
      },
      {
        nomeUsuario: "Anderson Leite",
        fotoUsuario: "https://avatars.githubusercontent.com/u/83857848?v=40",
        fotoPost: FotoAnderson,
      },
    ],

    novoNomeUsuario: "",
    novaFotoUsuario: "",
    novaFotoPost: "",
  };

  adicionarNovoPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.novoNomeUsuario,
      fotoUsuario: this.state.novaFotoUsuario,
      fotoPost: this.state.novaFotoPost,
    };

    const novasPostagens = [...this.state.postagens, novaPostagem];
    this.setState({ postagens: novasPostagens });

    this.setState({
      novoNomeUsuario: "",
      novaFotoUsuario: "",
      novaFotoPost: "",
    });
  };

  onChangeUsuario = (event) => {
    this.setState({ novoNomeUsuario: event.target.value });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({ novaFotoUsuario: event.target.value });
  };

  onChangeFotoPost = (event) => {
    this.setState({ novaFotoPost: event.target.value });
  };

  render() {
    const listaPostagens = this.state.postagens.map((dado) => {
      return (
        <Post
          nomeUsuario={dado.nomeUsuario}
          fotoUsuario={dado.fotoUsuario}
          fotoPost={dado.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <Input
          value={this.state.novoNomeUsuario}
          onChange={this.onChangeUsuario}
          placeholder="Insira Nome"
        />
        <Input
          value={this.state.novaFotoUsuario}
          onChange={this.onChangeFotoUsuario}
          placeholder="Link foto do Perfil"
        />
        <Input
          value={this.state.novaFotoPost}
          onChange={this.onChangeFotoPost}
          placeholder="Link foto da Postagem"
        />
        <button onClick={this.adicionarNovoPost}>Novo Post</button>
        <div>{listaPostagens}</div>
      </MainContainer>
    );
  }
}

export default App;
