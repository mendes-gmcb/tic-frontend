import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { apiLocal } from "../../services/api";
import { Title } from "./styles";

interface ChurchMinistry {
  uuid: string;
  name: string;
  description: string;
  creator_id: string;
}

export const ChurchMinistry: React.FC = () => {
  const { repository } = useParams();
  const [ministry, setChurchMinistry] = useState<ChurchMinistry[]>([]);
  async function getMinistry(id: string) {
    const ministry = await apiLocal.get<ChurchMinistry[]>(`/pastoral/${id}`);
    setChurchMinistry(ministry.data);
  }

	if (!repository) {
		return (<></>);
	}

  getMinistry(repository);

  return (
    <>
      <Title>Criar Pastoral</Title>
    </>
  );
};
