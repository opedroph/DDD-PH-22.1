import React from "react";
import {Botao} from "./style"

const Button = ({texto, mode, funcao }) => {
    return (
        <Botao onClick={funcao} mode= {mode} >{texto}</Botao>
    );
}

export default Button;