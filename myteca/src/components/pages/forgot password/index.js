import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import Formulario from '../../basics/formulario'
import { verifyUserExist} from "../../../services/api";
import BgEntryPages from '../../basics/BgEntryPages'
import Button from "../../basics/buttons";
import { Sinput } from "../../basics/input/style";
import Separador from "../../basics/separator";




const ForgotPassword= () => {
    const navigate = useNavigate()
    const [userInput, SetUserInput] = useState('')

    const handleSubmit = async (event)=>{
        event.preventDefault()
        try{
            const hasUsuario = await verifyUserExist({email:userInput, user:null})

            hasUsuario? console.log('tem'): console.log('n tem')

            hasUsuario? alert(`uma email foi enviado para ${userInput} com os detalhes para a recuperação da senha`)
            : alert('desculpe, nao foi possivel encontra um cadastro com esse email')

        }catch(erro){

            console.log(erro)
        }
    }


    const handleClick = (event)=>{
        event.preventDefault()
        navigate('/signup')
    }

    return (

        <BgEntryPages>
                    <Formulario onSubmit={handleSubmit} >
                    <Sinput placeholder="Email cadastrado" value={userInput} onChange={(event)=> SetUserInput(event.target.value)}></Sinput>
                    <Button  mode = 'primario' texto = 'RECUPERAR CONTA'></Button>
                    <Separador></Separador>
                    <Button onClick={handleClick} texto = 'CRIAR CONTA' />
                </Formulario>
        </BgEntryPages>
    );
}

export default ForgotPassword;