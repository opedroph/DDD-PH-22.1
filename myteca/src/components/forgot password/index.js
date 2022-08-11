import React from "react";
import Button from "../basics/buttons";
import { Sinput } from "../basics/input/style";
import Separador from "../basics/separator";
import { BgContainer, DivDireita, DivEsquerda, Formualario } from "./style";

const ForgotPassword= () => {
    return (
        <>
        <BgContainer>
            <DivEsquerda></DivEsquerda>
            <DivDireita>
                <Formualario>
                    <Sinput placeholder="Email ou usuário"></Sinput>
                    <Button  mode = 'primario' texto = 'RECUPERAR CONTA'></Button>
                    <Separador></Separador>
                    <Button texto = 'CRIAR CONTA'></Button>
                </Formualario>
            </DivDireita>
        </BgContainer>
        </>
    );
}

export default ForgotPassword;