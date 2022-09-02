import styled, {css} from "styled-components";

export const BgFooter = styled.div`
    background-color: #062131;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 40px;
`
export const Informations = styled.ul`
display: flex;
flex-direction: column;
gap: 0.5em;
`

export const  TextInformation = styled.li`
    color: white;
    font-size: 0.8em;
    cursor: ${props => props.link ? 'pointer': null};
`
