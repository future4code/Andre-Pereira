import React from "react";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import axios from "axios";
import '../styles/Login.css'
import Button from "@mui/material/Button";
import { IoEnter } from "react-icons/io5";
import { BsHouseDoorFill } from "react-icons/bs";


export default function LoginPage() {
  const history = useHistory();

  const { formulario, alterarDadosFormulario } = useForm({
    email: "",
    passsword: "",
  });

  const irInicio = () => {
    history.push("/");
  };

  const fazerLogin = (event) => {
    event.preventDefault();

    const body = { email: formulario.email, password: formulario.password };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container__login">
      <div className="container__header__login">
      <Button onClick={irInicio} variant="contained" startIcon={<BsHouseDoorFill />}>
          Ínicio
        </Button>
        <h1>Login</h1>
      </div>
      <div className="container__form__login">
        <form onSubmit={fazerLogin}>
          <input
            name={"email"}
            required
            type={"email"}
            value={formulario.email}
            onChange={alterarDadosFormulario}
            placeholder="Digite e-mail de acesso"
            title={"Favor preencher o E-mail corretamente"}
          />
          <input
            name={"password"}
            required
            type={"password"}
            value={formulario.password}
            onChange={alterarDadosFormulario}
            placeholder="Digite a senha"
            title={"Digite a senha por favor"}
          />
          <Button type={'submit'} variant="contained" startIcon={<IoEnter />}>Entrar</Button>
        </form>
      </div>
    </div>
  );
}
