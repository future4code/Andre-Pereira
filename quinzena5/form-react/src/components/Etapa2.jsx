import React from 'react'
import { Pergunta } from './Pergunta'

export class Etapa2 extends React.Component {
  constructor(props) {
    super(props)
    this.curso = ""
    this.unidadeDeEnsino = ""
  }

  atualizarCurso = (curso) => { this.curso = curso }
  atualizarUnidadeDeEnsino = (unidadeDeEnsino) => { this.unidadeDeEnsino = unidadeDeEnsino }

  aoClicarNoProximo = () => {
    if(this.props.aoClicarEmEnviar) {
      this.props.aoClicarEmEnviar({
        curso: this.curso,
        unidadeDeEnsino: this.unidadeDeEnsino
      })
    }
  }

  render = () => {
    return (
      <div>
        <h3> <b> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </b> </h3>
        <Pergunta
          onChange={ this.atualizarCurso }
          titulo={"5. Qual curso?"}
        />
        <br/>
        <Pergunta
          onChange={ this.atualizarUnidadeDeEnsino }
          titulo={"6. Qual a unidade de ensino?"}
        />
        <br/>
        <button onClick = { this.aoClicarNoProximo }> Finalizar </button>
      </div>
    )
  }
}