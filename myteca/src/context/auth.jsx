import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import {api} from '../services/api';

export const authContext = createContext();


export const Authprovider = ({children})=>{
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const login = async (usuario, password)=>{

        //pega a lista de usuarios da api
        const resposta =await  api.get('/usuarios')
        const data = await resposta.data

        //verifica se existe usuario com aquele nome de usuario fornecido
        let hasUsuario = data.filter((s)=>{
            return ((s.user === usuario ||s.email === usuario) && s.password === password)
        })
        if(hasUsuario){
            setUser(...hasUsuario)
            navigate('/home')
        }

    }

    const logout = ()=>{
        console.log('logout')
        navigate('/')
    }


    return(
    <authContext.Provider value={{authenticated: !!user, user, login, logout}}>
        {children}
    </authContext.Provider>
    );

}
