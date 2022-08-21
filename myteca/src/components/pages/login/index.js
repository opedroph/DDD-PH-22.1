import React, {useState, useContext} from "react";
import Button from "../../basics/buttons";
import { Sinput } from "../../basics/input/style";
import Separador from "../../basics/separator";
import Formulario from "../../basics/formulario";
import {Link, useNavigate} from 'react-router-dom'
import InputText from "../../basics/input";

import { authContext } from "../../../context/auth";
import LinkText from "../../basics/logintext";
import BgEntryPages from "../../basics/BgEntryPages";

const Login= () => {

    const navigate =  useNavigate()
    const {authenticated, login} = useContext(authContext)
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('') 

    //se eu esquecer de apagar isso, sorry pra quem tiver lendo o codigo
    
    // const formData = [
    //     //seguir sempre a logica com a função no componente formulario
    //     //os dados serão postos no formulario na ordem em que aparecem aqui
    //     {
    //         component:InputText,
    //         type: 'Text',
    //         Text: 'Email ou Usuario'
    //     },
    //     {
    //         component:InputText,
    //         type: 'password',
    //         Text: 'Senha'
    //     },
    //     {
    //         component:Button,
    //         type: 'primary',
    //         text: 'ENTRAR',
    //         function: 'none'
    //     },
    //     {
    //         component:LinkText,
    //         text:'esqueceu a senha?',
    //         link: '/forgotpassword'
    //     },
    //     {
    //         component:Separador,
    //     },
    //     {
    //         component: Button,
    //         type: 'secundary',
    //         text: 'CRIAR CONTA',
    //         function:'onclick'
    //     }
        


    // ]
    
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

        <BgEntryPages>
                    <Formulario onSubmit={handleSubmit}>
                    <InputText placeholder="Email ou Nome de usuário" value={usuario} onChange={setUsuario}></InputText>
                    <InputText placeholder="Senha" value={password} type='password' onChange={setPassword}></InputText>
                    <Button  mode = 'primario' texto = 'ENTRAR'></Button>
                    <Link to={'/forgotpassword'}><LinkText>Esqueceu a senha?</LinkText></Link>
                    <Separador></Separador>
                    <Button onClick={handleClickCreateAccount} texto = 'CRIAR CONTA'></Button>
                    </Formulario>
        </BgEntryPages>
    );
}

export default Login;