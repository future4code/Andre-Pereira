import React, { Component } from "react";

class Etapa3 extends Component {
  render() {
    return (
      <div>
        <h1>Etapa 3 - Ensino Superior Incompleto</h1>
        <input
          value={this.props.graduacaoIncompleta}
          type="text"
          placeholder="Porque não terminou a graduação?"
        />
        <label>Você fez algum curso complementar?</label>
        <select>
          <option value="0">Não fiz curso complementar</option>
          <option value="1">Curso técnico</option>
          <option value="1">Curso técnico</option>
          <option value="2">Curso de inglês</option>
        </select>
      </div>
    );
  }
}

export default Etapa3;
