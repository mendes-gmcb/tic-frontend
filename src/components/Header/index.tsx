import React from 'react'
import { Link } from 'react-router-dom'
import { Navegacao } from './styles'
export const Header: React.FC = () => {
    return (
        <Navegacao>
                    <ul>
                        <li>
                            <Link to="/home"> Home </Link>
                        </li>
                        <li>
                            <Link to="/church-ministry"> Pastoral </Link>
                        </li>
                        <li> 
                            <Link to="/users"> Usuários </Link>
                        </li>
                        <li> 
                            <Link to="/profile"> Perfil </Link>
                        </li>
                    </ul>
        </Navegacao>
    )
}   