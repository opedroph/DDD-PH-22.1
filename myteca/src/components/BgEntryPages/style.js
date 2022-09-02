import styled from "styled-components";
import foto from "../../img/login/book.png";

export const BgContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #bae3fa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DivEsquerda = styled.div`
  flex: 1;
  height: 100%;
  background-image: url(${foto});
  background-position: center;
  background-size: cover;
`;

export const DivDireita = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
