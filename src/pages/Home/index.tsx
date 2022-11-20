import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiLocal } from "../../services/api";
import { Title } from "../../components/Title";
import { AddButton } from "../../components/AddButton";
import { List } from './styles';

interface ChurchMinistry {
  id: string;
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

  useEffect(() => {
    getMinistry()
 }, []);

  return (
    <>
      <Title text={'Pastorais'} />
      <List>
        {churchMinistry.map((ministry, i) => (
          <li key={i}>
            <Link to={`/church-ministry/${ministry.id}`}>
              {ministry.name || "Nome não encontrado"}
            </Link>
          </li>
        ))}
      </List>
      <AddButton url={"church-ministry"}></AddButton>
    </>
  );
};
