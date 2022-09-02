import styled from "styled-components";

export const BgDropContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    border: ${props=>props.isDragActive === true? '3px solid green':null};
    border: ${props=>props.isDragReject === true? '3px solid red':null}
`

export const Image = styled.img`
width: 70%;
`

export const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content:center;

`

export const Text = styled.p`
    display: inline;
    color:black;
    font-size: 1em;
    text-align: center;
`

export const Highlighted = styled.span`
    display: inline;
    color: #0F567E;
    font-size: 1.2em;
`