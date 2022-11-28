import React, { useState, useEffect, useContext } from "react";
import { Title } from "../../components/Title";
import { Form } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { Navigate, useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { apiLocal } from "../../services/api";

export const Profile: React.FC = () => {
  const { user, setUser } = useContext(AuthContext);
  if (!user) return <Navigate to="/" />;

  const [name, setName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const navigate = useNavigate();


  const MySwal = withReactContent(Swal);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (!user) return navigate("/");;


    const credencials = {
      name,
      email: user.email,
      phone,
      newEmail
    };

    try {
      const resp = await apiLocal.put(`user`, credencials);
      const aux = resp.data;
      console.log(aux);
      setUser(aux);
      navigate("/");
    } catch {
      MySwal.fire({
        title: <h2>Erro</h2>,
        html: <p>Não foi possível atualizar seus dados.</p>,
        didOpen: () => {
          Swal.getDenyButton();
        },
      });
    }
  }

  useEffect(() => {}, []);

  return (
    <>
      <Title text={"Perfil"} />
      <Form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder={user.name}
          />
          <input
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder={user.email}
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            placeholder={user.phone}
          />
        </div>
        <div>
          <button type="submit">Atualizar</button>
        </div>
      </Form>
    </>
  );
};
