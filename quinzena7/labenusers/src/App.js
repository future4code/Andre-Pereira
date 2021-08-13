import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

const ListaUsuarios = styled.div`
  margin-left: 48px;
  margin-top: 32px;
`;

class App extends Component {
  state = {
    usuarios: [],
    name: "",
    email: "",
  };

  onChangeNome = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  exibirUsuarios = () => {
    return axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: { Authorization: "andre-pereira-johnson" },
      }
    );
  };

  criarUsuario = () => {
    return axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          name: this.state.name,
          email: this.state.email,
        },
        {
          headers: { Authorization: "andre-pereira-johnson" },
        }
      )
      .then(() => {
        this.exibirUsuarios().then((response) => {
          alert("Usúario criado com sucesso");
          this.setState({ name: "" });
          this.setState({ email: "" });
          this.setState({ usuarios: response.data });
        });
      });
  };

  removerUsuario = () => {
    return axios
      .delete(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
        {
          id: this.state.usuarios.id,
        }
      )
      .then(() => {
        alert("Usúario removido com sucesso");
      });
  };

  componentDidMount = () => {
    this.exibirUsuarios().then((response) => {
      this.setState({ usuarios: response.data });
    });
  };

  render() {
    return (
      <div>
        <h1>Criar Usúario</h1>
        <input
          placeholder="Digite seu nome"
          value={this.state.name}
          onChange={this.onChangeNome}
          required
        />
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={this.state.email}
          onChange={this.onChangeEmail}
          required
        />
        <button onClick={this.criarUsuario}>Criar usúario</button>
        <ListaUsuarios>
          {this.state.usuarios.map((usuario, i) => {
            return (
              <div className="users">
                <p key={i}>{usuario.name}</p>
                <button onClick={() => this.removerUsuario(usuario.id)}>
                  x
                </button>
              </div>
            );
          })}
        </ListaUsuarios>
      </div>
    );
  }
}

export default App;
