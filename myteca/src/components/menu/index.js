import React from 'react'
import { BgMenu, LinkText } from './style'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <BgMenu>
        <Link to={'/'}><LinkText>minhas bibliotecas</LinkText></Link>
        <Link to={'/'}><LinkText>bibliotecas que sigo</LinkText></Link>
        <Link to={'/'}><LinkText>bibliotecas públicas</LinkText></Link>
    </BgMenu>
  )
}

export default Menu