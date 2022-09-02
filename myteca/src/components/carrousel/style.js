import styled, { css } from "styled-components";

export const BgCarrousel = styled.div`
  height: 350px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonCarrousel = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.side === "left" &&
    css`
      left: 10px;
    `}
  ${(props) =>
    props.side === "right" &&
    css`
      right: 10px;
    `}


    &:hover{
        background-color: gray;
        opacity: 0.6;
    }

    > svg{
        color:white;
        font-size: 2.4em;
    }



`;

export const Text = styled.p`
  color: white;
  font-size: 3em;
  position: absolute;
  width: 600px;
  font-weight: 700;
  text-align: center;
`;


