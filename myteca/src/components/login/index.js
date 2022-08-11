import React from "react";
import Button from "../basics/buttons";
import { Sinput } from "../basics/input/style";
import Separador from "../basics/separator";
import { BgContainer, DivDireita, DivEsquerda, Formualario } from "./style";

const Login= () => {
    return (
        <>
        <BgContainer>
            <DivEsquerda></DivEsquerda>
            <DivDireita>
                <Formualario>
                    <Sinput placeholder="Nome de usuário"></Sinput>
                    <Sinput placeholder="Senha"></Sinput>
                    <Button  mode = 'primario' texto = 'ENTRAR'></Button>
                    <Separador></Separador>
                    <Button texto = 'CRIAR CONTA'></Button>
                </Formualario>
            </DivDireita>
        </BgContainer>
        </>
    );
}

export default Login;