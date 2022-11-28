import React from "react";
import { FiTrash } from "react-icons/fi";
import { Remove } from "./styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { apiLocal } from "../../services/api";

const MySwal = withReactContent(Swal);


interface Event {
  uuid: string;
  solemnitie: string;
  hour: number;
  day: number | string;
  confirm_celebration: number;
  isComplete: boolean;
}

interface RemoveButtonProps {
  eventId: string;
  stateChanger: Function;
}

export class RemoveButton extends React.Component<RemoveButtonProps> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const id = this.props.eventId;
    
    MySwal.fire({
      showDenyButton: true,
      title: <h2>Aviso</h2>,
      html: (
        <p>
          Tem certeza que deseja excluir o evento?
          <br/>Todos os dados do evento
          serão permanentemente deletados.
        </p>
      ),
      denyButtonText: "Excluir",
      confirmButtonText: "Cancelar",
    }).then(async (result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        try {
          const request = await apiLocal.delete(`/celebration/${id}`)
          Swal.fire('Saved!', '', 'success')
          this.props.stateChanger()
        } catch (error) {
          MySwal.fire({
            title: <h2>Erro</h2>,
            html: <p>Não foi possível exluir o evento.</p>,
            didOpen: () => {
              Swal.getDenyButton();
            },
          });
        }
      }
    });
  };

  
  render() {
    return (
      <Remove onClick={this.handleClick}>
        <FiTrash size={16} />
      </Remove>
    );
  }
}
