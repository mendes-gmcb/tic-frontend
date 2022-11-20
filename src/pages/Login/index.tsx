import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { apiLocal } from '../../services/api';
import {Header, Formulario, Image} from './styles'

interface User {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    
    const [user, setuser] = useState<User>()

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void{
        // setNovoRepo(event.target.value)
    }

    // função executada quando usuário pressiona o botão
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>, ): Promise<void> {
        // // não atualiza a página
        // event.preventDefault()
        // console.log(`Entrou`)
        // // chama a api
        // try {
        //     const resp = await api.get<IGithubRepository>(`repos/${novoRepo}`)
        //     const aux = resp.data
        //     console.log(aux)
        //     setRepos([...repos, aux])
        // }
        // catch{
        //     console.log(`Repositório não encontrado`)
        // }
    }

    return (
         <> 
            <Image src={logo} alt="Paróquia Nossa Senhora do Patrocínio"/>
            <Header>
                <h1>Scheduler</h1>
                <h3>Venha fazer parte</h3>
            </Header>
            <Formulario onSubmit={handleSubmit}>
                <input onChange={handleInputChange} placeholder="Email"/>
                <input onChange={handleInputChange} placeholder="Senha"/>
                <button type="submit"> Login </button>
                <span>Ainda não tem uma conta? &nbsp; <Link to="/create-account"> Criar agora </Link></span>
            </Formulario>
         </>
    )
}   