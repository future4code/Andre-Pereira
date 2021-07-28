import React from 'react'
import { Pergunta } from './Pergunta'


export class Etapa3 extends React.Component {
  constructor(props) {
    super(props)
    this.terminarEnsinoSuperior = ""
    this.cursoComplementar = ""
  }

  atualizarTerminarEnsinoSuperior = (terminarEnsinoSuperior) => { this.terminarEnsinoSuperior = terminarEnsinoSuperior }
  atualizarCursoComplementar = (cursoComplementar) => { this.cursoComplementar = cursoComplementar }

  aoClicarNoProximo = () => {
    if(this.props.aoClicarEmEnviar) {
      this.props.aoClicarEmEnviar({
        terminarEnsinoSuperior: this.terminarEnsinoSuperior,
        cursoComplementar: this.cursoComplementar
      })
    }
  }

  render = () => {
    return (
      <div>
        <h3> <b> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </b> </h3>
        <Pergunta
          onChange={ this.atualizarTerminarEnsinoSuperior }
          titulo={ "5. Por que você não terminou um curso de graduação?" }
        />
        <br/>
        <Pergunta
          onChange={ this.atualizarCursoComplementar }
          titulo={"6. Você fez algum curso complementar?"}
          tipo={"selecao"}
          opcoes={
            ["Curso técnico",
              "Cursos de inglês",
              "Não fiz nem curso complementar"]
          }
        />
        <br/>
        <button onClick = { this.aoClicarNoProximo }> Finalizar </button>
      </div>
    )
  }
}