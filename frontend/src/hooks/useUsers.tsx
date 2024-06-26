import axios from 'axios'
import {createContext, useState, useEffect, ReactNode, useContext} from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

import {api} from '../services/api'

interface User {
    id_user: number,
    name: string,
    email: string,
    telephone: string,
    birth_date: string,
    birth_city: string,
    companies: string
}

interface UserInput {
    name: string,
    email: string,
    telephone: string,
    birth_date: string,
    birth_city: string,
    companies: number[]
}

//type UserInput = Omit<User, 'id_users' | 'companies'>

interface UsersProviderProps{
    children: ReactNode
}

interface UsersContextData{
    users: User[],
    createUser: (user: UserInput) => Promise<void>,
    deleteUser: (userId: number) => Promise<void>
}

export const UsersContext = createContext<UsersContextData>(
    {} as UsersContextData
)

export function UsersProvider({children} : UsersProviderProps){

    const [users, setUsers] = useState<User[]>([])

    useEffect(() =>{
        
        // mock api
        // api.get('users')
        //     .then(response => setUsers(response.data.users))

        api.get('user')
            .then(response => setUsers(response.data))


    }, [])

    async function createUser(userInput : UserInput){

        if(Array.isArray(userInput.companies) && userInput.companies[0] !== 0){
            
            api.post('/user/create', userInput).then(response =>{
                const user = response.data;

                setUsers([
                    ...users,
                    user
                ])
    
            })

        }else{

            await MySwal.fire({
                title: <strong>Atenção!</strong>,
                html: <i>Insira as empresas do usuário!</i>,
                icon: 'warning'
            })
        }
    
    }

    async function deleteUser(userId : number){

        api.delete(`/user/${userId}/delete`).then(response =>{
            
            if(response.status === 200){
    
                api.get('user')
                    .then(response => setUsers(response.data))
    
                MySwal.fire({
                    title: <strong>Sucesso!</strong>,
                    html: <i>Usuário deletado com sucesso!</i>,
                    icon: 'success'
                })
    
            }else{
    
                MySwal.fire({
                    title: <strong>Erro!</strong>,
                    html: <i>Usuário não pode ser deletado!</i>,
                    icon: 'error'
                })
    
            }
    
        })
    
    
    }



    return (<UsersContext.Provider value={{users, createUser, deleteUser}}>
        {children}
    </UsersContext.Provider>)
}



export function useUsers(){
    const context = useContext(UsersContext)

    return context
}