import React, { useState, useContext } from "react";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/auth";
import { apiLocal } from "../../services/api";
import { ChurchMinistry } from "../ChurchMinistry";
import { Form } from "./styles";

interface ChurchMinistry {
  uuid: string;
  name: string;
  description: string;
  creator_id: string;
}

export const AddChurchMinistry: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  if (!user) {
    return <></>;
  }

  const { id } = user;

  async function hadleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const churchMinistry = { name, description, creator_id: id };

    const ministry = await apiLocal.post<ChurchMinistry>(
      "/pastoral",
      churchMinistry
    );
  }

  return (
    <>
      <Title text={"Criar Pastoral"} />
      <Form onSubmit={hadleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da pastoral"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição da pastoral"
        />
        <button type="submit"> Criar pastoral </button>
      </Form>
    </>
  );
};
