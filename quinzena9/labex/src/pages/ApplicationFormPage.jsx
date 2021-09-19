import React, { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import { useHistory } from "react-router";
import { countries } from "../constants/countries";
import axios from "axios";

export default function ApplicationFormPage() {
  const history = useHistory();
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-pereira-johnson/trips"
      )
      .then((res) => {
        setViagens(res.data.trips);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const { formulario, alterarDadosFormulario, clean } = useForm({
    id: "",
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
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-pereira-johnson/trips/${formulario.id}/apply`,
        body
      )
      .then((response) => {
        alert("Dados enviado com sucesso");
       clean()
      });
  };

  return (
    <>
      <p>Preencha os dados para Iniciar essa viagem</p>
      <form onSubmit={enviarFormularios}>
        <select
          placeholder={"Viagem"}
          name={"id"}
          value={formulario.id}
          onChange={alterarDadosFormulario}
          required
        >
          <option>Selecione sua viagem</option>
          {viagens.map((cadaViagem) => {
            return (
              <option key={cadaViagem.id} value={cadaViagem}>
                {cadaViagem.name}
              </option>
            );
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
        <select
          placeholder={"País"}
          name={"country"}
          value={formulario.country}
          onChange={alterarDadosFormulario}
          required
        >
          <option value={""} disabled>
            Escolha um País
          </option>
          {countries.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
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
