import React, { Component } from "react";

class Etapa1 extends Component {
  render() {
    return (
      <div>
        <h2>Etapa 1 - Dados Gerais</h2>
        <input
          value={this.props.nome}
          type="text"
          placeholder="Digite seu nome completo"
          required
        />
        <input
          value={this.props.idade}
          type="number"
          placeholder="Digite sua idade"
        />
        <input
          value={this.props.email}
          type="email"
          placeholder="Digite seu e-mail"
        />
        <label>Qual grau de escolaridade</label>
        <select>
          <option value="0">-</option>
          <option value="1">Ensino Médio Incompleto</option>
          <option value="2">Ensino Médio Completo</option>
          <option value="3">Superior Incompleto</option>
          <option value="4">Superior Completo</option>
        </select>
      </div>
    );
  }
}

export default Etapa1;
