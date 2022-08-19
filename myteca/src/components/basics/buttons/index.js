import React from "react";
import {Botao} from "./style"

const Button = ({texto, mode, funcao, onClick }) => {
    return (
        <Botao onClick={onClick} mode= {mode} >{texto}</Botao>
    );
}

export default Button;