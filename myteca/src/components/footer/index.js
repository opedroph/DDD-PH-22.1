import React from 'react'
import { BgFooter, Informations, TextInformation } from './style'

function Footer() {
  return (
    <BgFooter>
        <Informations>
            <TextInformation>Contato:</TextInformation>
            <TextInformation>Telefone: (21)91234-5678</TextInformation>
            <TextInformation>Email: Emailempresa@gmail.com</TextInformation>
            <TextInformation>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</TextInformation>
        </Informations>
        <Informations>
            <TextInformation link >Perguntas Frequentes</TextInformation>
            <TextInformation link >sobre a empresa</TextInformation>
        </Informations>
    </BgFooter>
  )
}

export default Footer