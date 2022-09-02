import React from "react";
import Footer from "../../../components/footer";
import HeaderDontLogged from '../../../components/headers/headerDontLogged'
import Menu from '../../../components/menu'
import Carrousel from "../../../components/carrousel";
import { BottomContainer, InformationsContainer, TopContainer, TextInformations, Button } from "../style";

function HomeDontLogged() {
  return (
    <>
        <HeaderDontLogged></HeaderDontLogged>
        <Menu></Menu>
        <Carrousel></Carrousel>
        <InformationsContainer type='primary'>
            <TopContainer>
                <TextInformations>Crie, organize e gerencie suas próprias bibliotecas de arquivos.</TextInformations>
                <TextInformations>Sua privacidade está segura. Escolha quem pode ver seus arquivos!</TextInformations>
                <TextInformations>Suba quantos arquivos quiser para sua biblioteca</TextInformations>
            </TopContainer>
            <BottomContainer>
                <Button>MINHAS BIBLIOTECAS</Button>
            </BottomContainer>
        </InformationsContainer>
        <InformationsContainer type='secundary'>
            <TopContainer>
                <TextInformations>Baixe arquivos upados por outras pessoas.</TextInformations>
                <TextInformations>O dono da biblioteca escolhe todos que podem visualizar os arquivos.</TextInformations>
                <TextInformations>Arquivos separados por seção para facilitar sua busca.</TextInformations>
            </TopContainer>
            <BottomContainer>
                <Button>BIBLIOTECAS QUE SIGO</Button>
            </BottomContainer>
        </InformationsContainer>
        <InformationsContainer type='primary'>
            <TopContainer>
                <TextInformations>Qualquer um pode baixar aquivos de bibliotecas públicas.</TextInformations>
                <TextInformations>Entre em qualquer biblioteca pública mesmo sem convite.</TextInformations>
                <TextInformations>Você pode pesquisar o nome de uma biblioteca para achá-la mais rápido.</TextInformations>
            </TopContainer>
            <BottomContainer>
                <Button>BIBLIOTECAS PÚBLICAS</Button>
            </BottomContainer>
        </InformationsContainer>
        <Footer></Footer>
    </>
  )
}

export default HomeDontLogged