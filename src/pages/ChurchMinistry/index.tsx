import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { apiLocal } from "../../services/api";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/auth";
import { Form } from "./styles";

interface ChurchMinistry {
  id: string;
  name: string;
  description: string;
  creator_id: string;
}

export const ChurchMinistry: React.FC = () => {
  const { repository } = useParams();
  const { user } = useContext(AuthContext);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ministry, setChurchMinistry] = useState<ChurchMinistry>(
    {} as ChurchMinistry
  );

  async function getMinistry(id: string) {
    const ministry = await apiLocal.get<ChurchMinistry>(`/pastoral/${id}`);
    setChurchMinistry(ministry.data);
  }
  
  if (!repository) {
    return (<>eRRO</>);
  }
  
  async function hadleSubmit(
    event: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
      event.preventDefault();
      
      if (!repository || !user) {
        return;
      }
      
      const churchMinistry = { name, description, creator_id: user.id };
      
      const ministry = await apiLocal.put<ChurchMinistry>(
        `/pastoral${repository}`,
        churchMinistry
        );
      }

  useEffect(() => {
    console.log(repository, user)
    getMinistry(repository);
    console.log('entrou')
  }, []);
  
  return (
    <>
      <Title text={"Pastoral"} />
      <Form onSubmit={hadleSubmit}>
        <input
          value={ministry.name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da pastoral"
        />
        <input
          value={ministry.description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição da pastoral"
        />
        <button type="submit"> Atualizar pastoral </button>
      </Form>
    </>
  );
};
