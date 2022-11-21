import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { apiLocal } from "../../services/api";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/auth";
import { Form } from "./styles";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


interface ChurchMinistry {
  id: string;
  name: string;
  description: string;
  creator_id: string;
}

export const ChurchMinistry: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ministry, setChurchMinistry] = useState<ChurchMinistry>(
    {} as ChurchMinistry
  );

  async function getMinistry(id: string) {
    try {
      const { data } = await apiLocal.get<ChurchMinistry>(`/pastoral/${id}`);
      setChurchMinistry(data);
      setName(data.name);
      setDescription(data.description);
    } catch (error) {
      Swal.fire('Oops', 'Não encontramos os dados da sua pastoral', 'info')
      return navigate('/')
    }
  }

  async function hadleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (!id || !user) {
      return;
    }
    const churchMinistry = { name, description, creator_id: user.id };
    const ministryUpdate = await apiLocal.put<ChurchMinistry>(
      `/pastoral/${id}`,
      churchMinistry
    );

    setChurchMinistry(ministryUpdate.data);
  }

  async function deleteChurchMinistryOnClick() {
    MySwal.fire({
      showDenyButton: true,
      title: <h2>Aviso</h2>,
      html: (
        <p>
          Tem certeza que deseja excluir a pastoral? 
          <br/>Todos os dados da pastoral
          serão permanentemente deletados.
        </p>
      ),
      denyButtonText: "Excluir",
      confirmButtonText: "Cancelar",
    }).then(async (result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        await apiLocal.delete(`/pastoral/${id}`)
        Swal.fire('Saved!', '', 'success')
        return navigate('/');
      }
    });
  }

  useEffect(() => {
    if (!id) {
      return navigate('/');
    }

    getMinistry(id);
  }, [id]);

  return (
    <>
      <Title text={"Pastoral"} />
      <Form onSubmit={hadleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder={ministry.name}
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder={ministry.description}
        />
        <button type="submit"> Atualizar pastoral </button>
        <button type="button" onClick={deleteChurchMinistryOnClick}>
          {" "}
          Excluir Pastoral
        </button>
      </Form>
    </>
  );
};
