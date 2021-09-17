import React from "react";
import { useHistory } from "react-router";
import { useForm } from "../hooks/useForm";

export default function LoginPage() {
  const history = useHistory();

  const { formulario, alterarDadosFormulario } = useForm({
    email: "",
    passsword: "",
  });

  const irInicio = () => {
    history.push("/");
  };

  const fazerLogin = () => {
    console.log(formulario);
    history.push("/");
  };

  return (
    <div>
      <p>Login</p>
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
        <button>Entrar</button>
      </form>
      <button onClick={irInicio}>Ínicio</button>
    </div>
  );
}
