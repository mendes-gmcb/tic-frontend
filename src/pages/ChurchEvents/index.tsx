import React, { Component, useEffect, useState } from "react";
import { FiCheckSquare, FiTrash } from "react-icons/fi";
import { apiLocal } from "../../services/api";
import { Tasks } from "./styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Title } from "../../components/Title";
import { AddButton } from "../../components/AddButton";
import { useNavigate } from "react-router-dom";
import { RemoveButton } from "../../components/RemoveButton";

const MySwal = withReactContent(Swal);

interface Event {
  id: string;
  solemnitie: string;
  hour: number;
  day: number | string;
  confirm_celebration: number;
  isComplete: boolean;
}

export const ChurchEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventData, setNewEventData] = useState<Date>();
  const [newEventHour, setNewEventHour] = useState<Number>();

  const navigate = useNavigate();

  async function handleCreateNewEvent(): Promise<void> {
    if (newEventTitle === "" || newEventData === null || newEventHour === null)
      return;

    const createNewEvent = {
      solemnitie: newEventTitle,
      day: newEventData,
      hour: newEventHour,
      confirm_celebration: 1,
    };

    try {
      const resp = await apiLocal.post(`celebration`, createNewEvent);
      const aux = resp.data;
    } catch (error) {
      MySwal.fire({
        title: <h2>Erro</h2>,
        html: <p>Não foi possível criar um novo evento.</p>,
        didOpen: () => {
          Swal.getDenyButton();
        },
      });
    }
    getEvents();
    setNewEventTitle("");
  }

  async function getEvents() {
    console.log("Entrou");
    const { data } = await apiLocal.get<Event[]>(`celebration`);

    const newEvents = data.map((event) => {
      const date = new Date(event.day);
      event.day =
        date.getUTCDate() +
        "/" +
        date.getUTCMonth() +
        "/" +
        date.getUTCFullYear();
      return event;
    });
    setEvents(newEvents);
  }

  function handleToggleEventCompletion(id: string) {
    const toggleEvents = events.map((event) => {
      if (event.id === id) event.isComplete = !event.isComplete;

      return event;
    });

    setEvents(toggleEvents);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;

    console.log(key);

    if (key === "Enter") handleCreateNewEvent();
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Title text={"Eventos"} />
      <Tasks>
        {events.map((evento, i) => (
          <li key={i}>
            <div
              className={evento.isComplete ? "completed" : ""}
              data-testid="event"
            >
              <label>
                <input
                  type="checkbox"
                  readOnly
                  checked={evento.isComplete}
                  onClick={() => handleToggleEventCompletion(evento.id)}
                />
                <span></span>
              </label>
              <p>{evento.solemnitie}</p>
              <p>{evento.day}</p>
              <p>{evento.hour}</p>
              <RemoveButton eventId={evento.id} stateChanger={getEvents}/>
            </div>
          </li>
        ))}
      </Tasks>
      <AddButton url={"event"}></AddButton>
    </>
  );
};
