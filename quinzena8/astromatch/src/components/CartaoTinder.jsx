import React, { useState, useEffect } from "react";
import "./CartaoTinder.css";
import CartaoPessoa from "react-tinder-card";
import axios from "axios";

const CartaoTinder = () => {
  const [pessoa, setPessoa] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre-pereira/person"
      )
      .then((response) => {
        setPessoa(response.data.profile);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="cartao__tinder">
      <div className="cartaoTinder__container">
        <CartaoPessoa className="swipe" preventSwipe={["up", "down"]}>
            <div className="cartao" style={{backgroundImage: `url(${pessoa.photo})`}}>
                <h2>{pessoa.name}</h2>
            </div>
        </CartaoPessoa>
      </div>
    </div>
  );
};

export default CartaoTinder;
