import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router";
import { countries } from "../constants/countries";
import axios from "axios";

export default function ApplicationFormPage() {
  const history = useHistory();
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"
      )
      .then((res) => {
        setViagens(res.data.trips);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const { formulario, alterarDadosFormulario } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const irInicio = () => {
    history.goBack("/");
  };

 

  const enviarFormularios = (id) => {
    id.preventDefault();

    const body = {
      name: formulario.name,
      age: formulario.age,
      applicationText: formulario.applicationText,
      profession: formulario.profession,
      country: formulario.country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips/${id}/apply`,
        body
      )
      .then((response) => {
        console.log(formulario.country);
        alert("Dados enviado com sucesso");
        alterarDadosFormulario({
          name: "",
          age: "",
          applicationText: "",
          profession: "",
          country: "",
        });
      });
  };

  return (
    <>
      <p>Preencha os dados para Iniciar essa viagem</p>
      <form onSubmit={enviarFormularios}>
        <select>
          <option>Selecione sua viagem</option>
          {viagens.map((cadaViagem) => {
            return <option>{cadaViagem.name}</option>;
          })}
        </select>
        <input
          required
          placeholder={"Nome completo"}
          type={"text"}
          name={"name"}
          onChange={alterarDadosFormulario}
          value={formulario.name}
        />
        <input
          required
          placeholder={"Idade"}
          type={"number"}
          name={"age"}
          onChange={alterarDadosFormulario}
          value={formulario.age}
        />
        <textarea
          placeholder={
            "Observação para essa viagem. (200 caraceteres no máximo.)"
          }
          type={"text"}
          name={"applicationText"}
          onChange={alterarDadosFormulario}
          value={formulario.applicationText}
          maxLength={200}
        />
        <input
          required
          placeholder={"Profissão"}
          type={"text"}
          name={"profession"}
          onChange={alterarDadosFormulario}
          value={formulario.profession}
        />
        <select>
          <option>Selecione o seu país</option>
          {countries.map((cadaPais) => {
            return (
              <option
                name={"country"}
                value={formulario.country}
                onChange={alterarDadosFormulario}
                required
              >
                {cadaPais}
              </option>
            );
          })}
        </select>
        <button>Salvar</button>
      </form>
      <button onClick={irInicio}>Ínicio</button>
    </>
  );
}
