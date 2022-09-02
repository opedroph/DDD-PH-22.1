import React from 'react'
import { BgHeader, LogoArea, LogoText } from '../style'
import { HeaderClickableContainer, HeaderClickableItem, LinkText } from '../style'
import {Link, useNavigate} from 'react-router-dom'
import Button from '../../buttons'


function Home() {
    const navigate = useNavigate()
    
    const handleClickLogo = ()=>{
        navigate('/')
    }

  return (
    <BgHeader>
        <LogoArea><LogoText onClick={handleClickLogo}>MYTECA</LogoText></LogoArea>
        <HeaderClickableContainer>
            <HeaderClickableItem><Link to={'/Login'}><LinkText>CONVITES</LinkText></Link></HeaderClickableItem>
            <HeaderClickableItem><Button mode={'primario'} texto={'CRIAR CONTA'}></Button></HeaderClickableItem>
        </HeaderClickableContainer>
    </BgHeader>
  )
}

export default Home