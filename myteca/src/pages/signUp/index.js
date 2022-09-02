import React, { useState } from "react";
import Button from "../../components/buttons";
import { Sinput } from "../../components/input/style";
import Separador from "../../components/separator";
import Formulario from "../../components/formulario";
import { Link, useNavigate } from "react-router-dom";
import { verifyUserExist, postUser } from "../../services/api";
import BgEntryPages from "../../components/BgEntryPages";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const cadastrarUsuario = async () => {
    const dados = { email: email, user: usuario, password: senha };
    //verificar se os inputs sao != de vazio e aplicar regex para verificação
    //verificar se já existe um usuario com esse nome e senha
    const isUserUnique = !(await verifyUserExist(dados));
    //verificar se as senhas estao iguais
    const passwordMatch = senha === confirmarSenha ? true : false;
    //cadastrar o usuario

    if (isUserUnique && passwordMatch) {
      postUser(dados);
      navigate("/");
    }
    //receber uma indicação de erro ou sucesso
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cadastrarUsuario();
  };

  return (
    <BgEntryPages>
      <Formulario onSubmit={handleSubmit}>
        <Sinput
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
        ></Sinput>
        <Sinput
          value={usuario}
          onChange={(event) => {
            setUsuario(event.target.value);
          }}
          placeholder="Nome de usuário"
        ></Sinput>
        <Sinput
          type={"password"}
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          placeholder="Senha"
        ></Sinput>
        <Sinput
          type={"password"}
          value={confirmarSenha}
          onChange={(event) => {
            setConfirmarSenha(event.target.value);
          }}
          placeholder="Confirmar Senha"
        ></Sinput>
        <Button mode="primario" texto="CRIAR CONTA"></Button>
        <Separador></Separador>
        <Link to={"/"}>
          <Button texto="ENTRAR"></Button>
        </Link>
      </Formulario>
    </BgEntryPages>
  );
};

export default SignUp;
