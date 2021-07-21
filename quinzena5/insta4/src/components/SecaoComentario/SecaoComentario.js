import React, { Component } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

export class SecaoComentario extends Component {
  state = {
    digitacao: "",
  };

  onChangeComentario = (event) => {
    this.setState({ digitacao: event.target.value });
    console.log(this.state.digitacao);
  };

  render() {
    return (
      <CommentContainer>
        <InputComentario
          placeholder={"Comente aqui"}
          value={this.state.digitacao}
          onChange={this.onChangeComentario}
        />
        <button onClick={this.props.aoEnviar}>Enviar</button>
      </CommentContainer>
    );
  }
}
