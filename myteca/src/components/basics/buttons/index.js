import React from "react";
import {Botao} from "./style"

const Button = ({texto, mode}) => {
    return (
        <Botao mode= {mode} >{texto}</Botao>
    );
}

export default Button;