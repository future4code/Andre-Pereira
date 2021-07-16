import React from "react";
import "./ImagemButton.css";

function ImagemButton(props) {
  return (
    <div className="image-button-container">
      <a href={props.link}>
        <img src={props.imagem} />
        <p>{props.texto}</p>
      </a>
    </div>
  );
}

export default ImagemButton;
