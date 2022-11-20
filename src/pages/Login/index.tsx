import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../contexts/auth";
import { apiLocal } from "../../services/api";
import { Header, Formulario, Image } from "./styles";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // função executada quando usuário pressiona o botão
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const credentials = { email, password };

    try {
      signIn(credentials);
    } catch {
      MySwal.fire({
        title: <h2>Erro</h2>,
        html: <p>Não foi possível fazer login.</p>,
        didOpen: () => {
          Swal.getDenyButton();
        },
      });
    }
  }

  return (
    <>
      <Image src={logo} alt="Paróquia Nossa Senhora do Patrocínio" />
      <Header>
        <h1>Scheduler</h1>
        <h3>Venha fazer parte</h3>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit"> Login </button>
        <span>
          Ainda não tem uma conta? &nbsp;{" "}
          <Link to="/create-account"> Criar agora </Link>
        </span>
      </Formulario>
    </>
  );
};
