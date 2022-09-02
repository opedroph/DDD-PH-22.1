import React from "react";
import { SFormulario } from "./style";

const Formulario = ({ children, onSubmit }) => {
  return <SFormulario onSubmit={onSubmit}>{children}</SFormulario>;
};

export default Formulario;
