import React, { useState } from "react";
import { FiCheckSquare, FiTrash } from "react-icons/fi";
import { apiLocal } from "../../services/api";
import { Form } from "./styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Title } from "../../components/Title";

const MySwal = withReactContent(Swal);

interface Event {
  id: string;
  solemnitie: string;
  hour: number;
  day: Date;
  confirm_celebration: number;
  isComplete: boolean;
}

export const AddChurchEvents: React.FC = () => {
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventData, setNewEventData] = useState<Date>();
  const [newEventHour, setNewEventHour] = useState<Number>();

  async function hadleSubmit(
    event?: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    if (event) event.preventDefault();
    if (newEventTitle === "" || newEventData === null || newEventHour === null)
      return;

    const newEvent = {
      solemnitie: newEventTitle,
      day: newEventData,
      hour: newEventHour,
      confirm_celebration: 1,
      isComplete: false,
    };

    try {
      const { data } = await apiLocal.post<Event>("/celebration", newEvent);
      const evento = data;
    } catch (error) {
      MySwal.fire({
        title: <h2>Erro</h2>,
        html: <p>Não foi possível criar um novo evento.</p>,
        didOpen: () => {
          Swal.getDenyButton();
        },
      });
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;

    console.log(key);

    if (key === "Enter") hadleSubmit();
  }

  return (
    <>
      <Title text={"Eventos"} />
      <Form onSubmit={hadleSubmit}>
        <input
          type="text"
          placeholder="Adicionar novo evento"
          onChange={(e) => setNewEventTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="date"
          onChange={(e) => setNewEventData(new Date(e.target.value))}
        />
        <input
          type="number"
          min="0"
          max="23"
          placeholder="Horário"
          onChange={(e) => setNewEventHour(new Number(e.target.value))}
        />
        <button type="submit">
          {" "}
          Criar pastoral
          <FiCheckSquare size={16} color="#fff" />
        </button>
      </Form>
    </>
  );
};
