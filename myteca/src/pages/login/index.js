import React, { useState, useContext } from "react";
import Button from "../../components/buttons";
import Separador from "../../components/separator";
import Formulario from "../../components/formulario";
import { Link, useNavigate } from "react-router-dom";
import InputText from "../../components/input";

import { authContext } from "../../context/auth";
import LinkText from "../../components/logintext";
import BgEntryPages from "../../components/BgEntryPages";

const Login = () => {
  const navigate = useNavigate();
  const { authenticated, login } = useContext(authContext);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    login(usuario, password);
    navigate("/home");
  };

  const handleClickCreateAccount = (event) => {
    event.preventDefault();
    navigate("/signup");
  };

  return (
    <BgEntryPages>
      <Formulario onSubmit={handleSubmit}>
        <InputText
          placeholder="Email ou Nome de usuário"
          value={usuario}
          onChange={setUsuario}
        ></InputText>
        <InputText
          placeholder="Senha"
          value={password}
          type="password"
          onChange={setPassword}
        ></InputText>
        <Button fontSize={'1.5em'} borderRadius={'8px'} mode="primario" texto="ENTRAR"></Button>
        <Link to={"/forgotpassword"}>
          <LinkText>Esqueceu a senha?</LinkText>
        </Link>
        <Separador></Separador>
        <Button fontSize={'1.5em'} borderRadius={'8px'} onClick={handleClickCreateAccount} texto="CRIAR CONTA" ></Button>
      </Formulario>
    </BgEntryPages>
  );
};

export default Login;
