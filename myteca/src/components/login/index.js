import React, {useState, useContext} from "react";
import Button from "../basics/buttons";
import { Sinput } from "../basics/input/style";
import Separador from "../basics/separator";
import { BgContainer, DivDireita, DivEsquerda, Formualario } from "./style";
import {Link, useNavigate} from 'react-router-dom'


import { authContext } from "../../context/auth";
import LinkText from "../basics/logintext";

const Login= () => {

    const navigate =  useNavigate()
    const {authenticated, login} = useContext(authContext)
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('') 
    
    const handleSubmit = (event)=>{
        event.preventDefault()        
        login(usuario, password)
        navigate('/home')
    }

    const handleClickCreateAccount = (event)=>{
        event.preventDefault()
        navigate('/signup')
    }



    return (
        <>
        <BgContainer>
            <DivEsquerda></DivEsquerda>
            <DivDireita>
                <Formualario onSubmit={handleSubmit}>
                    <Sinput placeholder="Email ou Nome de usuário" value={usuario} onChange={(event)=>setUsuario(event.target.value)}></Sinput>
                    <Sinput placeholder="Senha" value={password} type='password' onChange={(event)=>{setPassword(event.target.value)}}></Sinput>
                    <Button  mode = 'primario' texto = 'ENTRAR'></Button>
                    <Link to={'/forgotpassword'}><LinkText>Esqueceu a senha?</LinkText></Link>
                    <Separador></Separador>
                    <Button onClick={handleClickCreateAccount} texto = 'CRIAR CONTA'></Button>
                </Formualario>
            </DivDireita>
        </BgContainer>
        </>
    );
}

export default Login;