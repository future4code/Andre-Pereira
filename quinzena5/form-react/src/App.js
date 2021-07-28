import React from 'react';
import './App.css';
import { Etapa1 } from './components/Etapa1'
import { Etapa2 } from './components/Etapa2'
import { Etapa3 } from './components/Etapa3'
import { EtapaFinal } from './components/EtapaFinal'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      etapaAtual: "1"
    }
  }

  aoTerminarEtapa1 = (resultado) => {
    if(resultado.escolaridade) {
      if(resultado.escolaridade.toLowerCase().indexOf("superior") !== -1) {
        this.setState({ etapaAtual: "2" })
      } else {
        this.setState({ etapaAtual: "3" })
      }
    }
  }

  aoTerminarEtapa2Ou3 = () => {
    this.setState({ etapaAtual: "final" })
  }

  renderEtapaAtual = () => {
    switch(this.state.etapaAtual){ 
      case "1":
        return (<Etapa1 aoClicarEmEnviar = { this.aoTerminarEtapa1 }/>)
      case "2":
        return (<Etapa2 aoClicarEmEnviar = { this.aoTerminarEtapa2Ou3 }/>)
      case "3":
        return (<Etapa3 aoClicarEmEnviar = { this.aoTerminarEtapa2Ou3 }/>)
      case "final":
        return (<EtapaFinal/>)
      default:
        return (<Etapa1 aoClicarEmEnviar = { this.aoTerminarEtapa1 }/>)
    }
  }

  render = () => {
    return (
      <div className="App">
        {
          this.renderEtapaAtual()
        }
      </div>
    );
  }

}

export default App;
