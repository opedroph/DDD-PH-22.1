import { BgContainer, DivDireita, DivEsquerda } from "./style";

const BgEntryPages = ({children}) => {
    return (
        <BgContainer>
    <DivEsquerda></DivEsquerda>
    <DivDireita>
        {children}
    </DivDireita>
    </BgContainer>
    );
}

export default BgEntryPages;
