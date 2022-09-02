import React, { useEffect, useState } from "react";
import { BgModal, Text } from "../style";
import Button from "../../../components/buttons";
import Creatable from "react-select/creatable";
import Formulario from "../../../components/formulario";
import { verifyUserExist } from "../../../services/api";
import { Message } from "../style";

function InviteModal() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({}); //ex: {text: convites enviados com sucesso, type: success/error}

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await sendInvite(setMessage, users);
    setLoading(false);
    console.log(message);
  };

  const sendInvite = async (setMessage, users) => {
    const noSend = []; //noSend contem os nomes de usuarios que nao foi possivel mandar o convite porque nao existem

    if (users.length === 0) {
      setMessage({
        text: "escolha alguns usuários para mandar os convites",
        type: "erro",
      });
    } else {
      try {
        await Promise.all(
          users.map(async (user) => {
            const hasUser = await verifyUserExist({
              user: user.label,
              email: null,
            });
            hasUser ? console.log() : noSend.push(user.label) && console.log('adicionado:',user.label); //no lugar de console.log() seria a função que realmente envia o convite
          })
        );
      } catch (erro) {
        console.log(erro);
      }
      
      
      
      noSend.length >0
        ? setMessage({
            text: `não foi possível enviar os convites para os seguintes usuários: ${noSend.map(
              (user) => " " + user
            )}  `,
            type: "erro",
          })
        : setMessage({
            text: "todo os convites foram enviados",
            type: "success",
          });
    }
  };

  // ${noSend.map(
  //   (user) => " " + user
  // )}

  return (
    <BgModal>
      <Formulario onSubmit={handleSubmit}>
        <Text>
          Digite o nome de usuário e a pessoa receberá um convite para essa
          biblioteca
        </Text>
        <Creatable
          //deixei sem options pq pro meu projeto não faz sentido ter opções
          isMulti
          isDisabled={loading}
          isSearchable
          onChange={(input) => setUsers(input)}
          value={users}
        ></Creatable>
        {message && <Message type={message.type}> {message.text}</Message>}
        <Button mode="primario" texto="ENVIAR CONVITE"></Button>
      </Formulario>
    </BgModal>
  );
}

export default InviteModal;
