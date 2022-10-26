import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { api } from '../../services/api';
import {Title, Formulario} from './styles'

export const DashBoard: React.FC = () => {
    // cria uma interface que contém os campos de um repositório no git
    interface IGithubRepository {
        full_name: string;
        description: string;
        owner: {
            login: string;
            avatar_url: string
        }
    }
    // cria um estado (variável) que representa um novo repositório
    const [novoRepo, setNovoRepo] = useState('')
    // cria uma lista de repositórios vazia
    const [repos, setRepos] = useState<IGithubRepository[]>([])

    // função executada quando usuários digita na caixa de texto
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void{
        setNovoRepo(event.target.value)
    }

    // função executada quando usuário pressiona o botão
    async function handleAddRepo(event: React.FormEvent<HTMLFormElement>, ): Promise<void> {
        // não atualiza a página
        event.preventDefault()
        // chama a api
        try {
            const resp = await api.get<IGithubRepository>(`repos/${novoRepo}`)
            const aux = resp.data
            setRepos([...repos, aux])
        }
        catch{
            console.log(`Repositório não encontrado`)
        }
    }

    return (
         <> 
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de repositórios </Title>
            <Formulario onSubmit={handleAddRepo}>
                <input onChange={handleInputChange} placeholder="username/nome_repo"/>
                <button type="submit"> Buscar </button>
            </Formulario>
         </>
    )
}   