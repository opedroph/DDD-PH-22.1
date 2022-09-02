import styled from "styled-components";

export const InformationsContainer = styled.div`
    padding: 30px 40px;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    background-color: ${props=>props.type === 'primary'? '#E2EFF6': '#BAE3FA'};
`
export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TextInformations = styled.p`
    font: 1em;
    color: black;
    text-align: center;
`

export const Button = styled.button`
    padding: 5px 10px;
    background-color: #062131;
    cursor: pointer;
    color: white;
    font-size: 1.2em;
`