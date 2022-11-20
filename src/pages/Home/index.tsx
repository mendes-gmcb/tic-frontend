import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiLocal } from "../../services/api";
import { Title } from "./styles";
import { AddButton } from "../../components/AddButton";

interface ChurchMinistry {
  uuid: string;
  name: string;
  description: string;
  creator_id: string;
}

export const Home: React.FC = () => {
  const [churchMinistry, setChurchMinistry] = useState<ChurchMinistry[]>([]);
  async function getMinistry() {
    const ministry = await apiLocal.get<ChurchMinistry[]>("/pastoral");
    setChurchMinistry(ministry.data);
  }

  getMinistry();

  return (
    <>
      <Title>Pastoral</Title>
      <ul>
        {churchMinistry.map((ministry) => (
          <li>
            <Link to={`/church-ministry/${ministry.uuid}`}>
              {" "}
              {ministry.name}{" "}
            </Link>
          </li>
        ))}
      </ul>
      <AddButton url={"church-ministry"}></AddButton>
    </>
  );
};
