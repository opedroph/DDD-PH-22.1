import styled from "styled-components";

export const BgModal = styled.div`
  width: ${(props) => (props.widthModal ? props.widthModal : "400px")};
`;

export const Text = styled.p`
  font-size: 1.25em;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  text-align: center;
`;

export const Message = styled.p`
  font-size: 1em;
  color: ${props=> props.type === 'erro'? 'red':'green'}
`