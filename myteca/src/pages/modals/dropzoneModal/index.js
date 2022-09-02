import React, { useEffect, useState } from "react";
import { BgModal } from "../style";
import Formulario from "../../../components/formulario";
import Button from "../../../components/buttons";
import InputText from "../../../components/input";
import Dropzone from "react-dropzone";
import  nuvemImagem  from "../../../img/dropzone/nuvemimagem.svg"
import { BgDropContainer, Highlighted, Text, TextContainer, Image } from "./style";

function ModalAddFile() {
  const [fileName, setFileName] = useState('');
  const [fileAccept, setFileAccept] = useState();
  const [message, setMessage] = useState("");

  const HandleFileAdd = (file) => {
    if (file[0].type === "application/pdf") {
      setFileAccept(file);
      setMessage("clique abaixo para adicionar o arquivo  ");
    } else {
      setMessage('o arquivo não é suportado, envie o arquivo em pdf')
    }
  };

  const handleFileSend = (event)=>{
    event.preventDefault();
    if(fileAccept !== null && fileName!== null){

      const fileObject = {name:fileName , File:fileAccept}
      // sendFile(fileObject) mandaria um objeto com o file e o nome, ao inves disso vai da um console.log
      console.log(fileObject)
    }
  }

  return (
    <BgModal>
      <Formulario onSubmit={handleFileSend}>
        <InputText
          placeholder={"Nome do arquivo"}
          value={fileName}
          onChange={(value) => setFileName(value)}
        ></InputText>
        <Dropzone onDropAccepted={HandleFileAdd}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <BgDropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <Image src={nuvemImagem} />
              <TextContainer>
                <Text>
                  <Highlighted>ARRASTE </Highlighted> ou
                  <Highlighted> CLIQUE</Highlighted> para selecionar um arquivo
                </Text>
              </TextContainer>
              <input {...getInputProps()} />
            </BgDropContainer>
          )}
        </Dropzone>
          {message && <p>{message}</p>}
        <Button mode={"primario"} texto={"ADICIONAR ARQUIVOS"}></Button>
      </Formulario>
    </BgModal>
  );
}

export default ModalAddFile;


{
  /* <Dropzone onDropAccepted={acceptedFiles => console.log(acceptedFiles)}>
{({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
  <BgDropContainer
    {...getRootProps()}
    isDragActive={isDragActive}
    isDragReject={isDragReject}
  >
    <TextContainer>
      <Text>
        <Highlighted>ARRASTE </Highlighted> ou
        <Highlighted> CLIQUE</Highlighted> para selecionar um arquivo
      </Text>
    </TextContainer>
    <input {...getInputProps()} />
  </BgDropContainer>
)}
</Dropzone> */
}
