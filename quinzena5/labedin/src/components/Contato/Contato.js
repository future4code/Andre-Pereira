import React from "react";
import './Contato.css'

export const Email = (props) => {
  return (
    <div className="smallcard-container">
      <img src={props.logoEmail} />
      <div>
        <h4>{props.descricao}</h4>
      </div>
    </div>
  );
};

export const Endereco = (props) => {
  return (
    <div className="smallcard-container">
      <img src={props.logoEndereco} />
      <div>
        <h4>{props.descricao}</h4>
      </div>
    </div>
  );
};
