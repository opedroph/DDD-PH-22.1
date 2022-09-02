import styled from "styled-components"



export const Botao = styled.button`
background-color: ${props => props.mode ==='primario' ? '#85C7ED' : '#000000'};
/* border-radius: 8px; */
border-radius: ${props =>props.borderRadius? props.borderRadius:'0px'};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.5em 1em;
cursor: pointer;
font-style: normal;
font-weight: 600;   
/* font-size: 1.5em; */
font-size: ${props => props.fontSize? props.fontSize:'1em'};
color: ${props => props.mode ==='primario'? '#000000' : '#ffffff'};

    &:hover{
        opacity: 0.9;
    }
`


