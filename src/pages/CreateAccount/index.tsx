import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { apiLocal } from "../../services/api";
import { Header, Formulario, Image } from "./styles";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CreateAccount: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");

  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const toconfirmPass = (pass: string, confirmPass: string) => {
    console.log(pass, confirmPass);
    if (pass === confirmPass) {
      setConfirmedPass(pass);
    } else {
      throw new Error("Senhas diferentes. Tente novamente");
    }
  };

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    try {
      toconfirmPass(password, confirmPass);
    } catch (error) {
      MySwal.fire({
        title: <p>As senhas são diferentes</p>,
        didOpen: () => {
          Swal.getDenyButton();
        },
      });
    }

    const credencials = {
      name,
      email,
      phone,
      password: confirmedPass,
    };

		if (confirmedPass == "") {
			return;
		}

    try {
      const resp = await apiLocal.post(`user`, credencials);
      const aux = resp.data;
      console.log(aux);

			// login automático
      
      //redireciona para home do app
      navigate('/')
    } catch {
      MySwal.fire({
        title: <h2>Erro</h2>,
				html: <p>Não foi possível cradastrar o usuário.</p>,
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
        <div>
          <input onChange={(e) => setName(e.target.value)} placeholder="Nome" />
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Celular"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <input
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirme sua senha"
          />
        </div>
        <button type="submit"> Cadastrar </button>
        <span>
          Já tem uma conta? &nbsp; <Link to="/login"> Fazer Login </Link>
        </span>
      </Formulario>
    </>
  );
};
