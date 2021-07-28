import React from 'react'
import { Pergunta } from './Pergunta'


export class Etapa1 extends React.Component {
  constructor(props) {
    super(props)
    this.nome = ""
    this.idade = ""
    this.email = ""
    this.escolaridade = ""
  }

  atualizaNome = (nome) => { this.nome = nome }
  atualizaIdade = (idade) => { this.idade = idade }
  atualizaEmail = (email) => { this.email = email }
  atualizaEscolaridade = (escolaridade) => {
    console.log(escolaridade)
    this.escolaridade = escolaridade
  }

  aoClicarNoProximo = () => {
    if (this.props.aoClicarEmEnviar) {
      this.props.aoClicarEmEnviar({
        nome: this.nome,
        idade: this.idade,
        email: this.email,
        escolaridade: this.escolaridade || "Ensino Médio Incompleto"
      })
    }
  }

  render = () => {
    return (
      <div>
        <h3> <b> ETAPA 1 - DADOS GERAIS </b> </h3>
        <Pergunta
          onChange={this.atualizaNome}
          titulo={"1. Qual seu nome?"}
        />
        <br />
        <Pergunta
          onChange={this.atualizaIdade}
          titulo={"2. Qual sua idade?"}
        />
        <br />
        <Pergunta
          onChange={this.atualizaEmail}
          titulo={"3. Qual seu email?"}
        />
        <br />
        <Pergunta
          onChange={this.atualizaEscolaridade}
          titulo={"4. Qual sua escolaridade?"}
          tipo={"selecao"}
          opcoes={
            ["Ensino Médio Incompleto",
              "Ensino Médio Completo",
              "Ensino Superior Incompleto",
              "Ensino Superior Completo"]
          }
        />
        <br />
        <button onClick={this.aoClicarNoProximo}> Continuar </button>
      </div>

    )
  }
}