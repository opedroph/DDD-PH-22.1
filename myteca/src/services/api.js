import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3333" });

export const verifyUserExist = async ({ user, email }) => {
  try {
    const resposta = await api.get("/usuarios");
    const datas = await resposta.data;
    const hasusuario = datas
      ? datas.filter(
          (data) => (data.user === user) || (data.email === email)
        )
      : null;
    const boolHasUsuario = Boolean(hasusuario.length);
    return boolHasUsuario;
  } catch (erro) {
    console.log(erro);
  }
};

export const postUser = (dados) => {
  try {
    api.post("/usuarios", dados);
  } catch (erro) {
    console.log(erro);
  }
};
