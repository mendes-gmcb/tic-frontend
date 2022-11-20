import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "./styles";

export const Home: React.FC = () => {
  return (
    <>
      <Main>
        <ul>
          <li>
            <Link to="/home"> Home </Link>
          </li>
          <li>
            <Link to="/church-ministry"> Pastoral </Link>
          </li>
          <li>
            <Link to="/users"> Usuários </Link>
          </li>
          <li>
            <Link to="/profile"> Perfil </Link>
          </li>
        </ul>
      </Main>
      <Header />
    </>
  );
};
