import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { apiLocal } from "../../services/api";
import { Title } from "./styles";

interface ChurchMinistry {
  uuid: string;
  name: string;
  description: string;
  creator_id: string;
}

export const AddChurchMinistry: React.FC = () => {
  const [churchMinistry, setChurchMinistry] = useState<ChurchMinistry[]>([]);
  async function getMinistry() {
    const ministry = await apiLocal.get<ChurchMinistry[]>("/pastoral");
    setChurchMinistry(ministry.data);
  }

  getMinistry();

  return (
    <>
      <Title>Criar Pastoral</Title>
      
    </>
  );
};
