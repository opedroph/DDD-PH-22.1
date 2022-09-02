import React from "react";
import { Botao } from "./style";

const Button = ({ texto, mode,fontSize, borderRadius ,onClick }) => {
  return (
    <Botao onClick={onClick} mode={mode} fontSize={fontSize} borderRadius={borderRadius}>
      {texto}
    </Botao>
  );
};

export default Button;
