import React from "react";
import Button from "../basics/buttons";
import { Sinput } from "../basics/input/style";
import Separador from "../basics/separator";
import { BgContainer, DivDireita, DivEsquerda, Formualario } from "./style";

const SignUp= () => {
    return (
        <>
        <BgContainer>
            <DivEsquerda></DivEsquerda>
            <DivDireita>
                <Formualario>
                    <Sinput placeholder="Email"></Sinput>
                    <Sinput placeholder="Nome de usuário"></Sinput>
                    <Sinput placeholder="Senha"></Sinput>
                    <Sinput placeholder="Confirmar Senha"></Sinput>
                    <Button mode = 'primario' texto = 'CRIAR CONTA'></Button>
                    <Separador></Separador>
                    <Button  texto = 'ENTRAR'></Button>
                </Formualario>
            </DivDireita>
        </BgContainer>
        </>
    );
}

export default SignUp;