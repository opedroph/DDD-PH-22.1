import styled from "styled-components"



export const Botao = styled.button`
background-color: ${props => props.mode ==='primario' ? '#85C7ED' : '#000000'};
border-radius: 8px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 50px;
cursor: pointer;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: ${props => props.mode ==='primario'? '#000000' : '#ffffff'};
`