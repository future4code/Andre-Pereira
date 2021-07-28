import React from "react";

export class Pergunta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  aoResponder = (e) => {
    if (this.props.tipo === "selecao") {
      const finalValue = e.target.value || this.props.options[0];
      this.setState({ value: finalValue });
    } else {
      this.setState({ value: e.target.value });
    }
  };

  geraPerguntaAberta = (titulo) => {
    return (
      <div>
        <p> {titulo} </p>
        <input onChange={this.aoResponder} />
      </div>
    );
  };

  geraPerguntaComSelecao = (titulo, options = ["oi"]) => {
    return (
      <div>
        <p> {titulo} </p>
        <select onChange={this.aoResponder}>
          {options.map((op, i) => {
            return (
              <option key={i} value={op}>
                {" "}
                {op}{" "}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  render = () => {
    this.props.onChange(this.state.value);
    if (this.props.tipo === "selecao") {
      return this.geraPerguntaComSelecao(this.props.titulo, this.props.opcoes);
    }
    return this.geraPerguntaAberta(this.props.titulo);
  };
}
