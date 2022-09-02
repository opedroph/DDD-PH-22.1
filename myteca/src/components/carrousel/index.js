import React, { useEffect, useState } from 'react'
import { BgCarrousel, ButtonCarrousel, Image, Text} from './style'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

import foto1 from '../../img/carrousel/carrousel1.png'
import foto2 from '../../img/carrousel/carrousel2.jpg'
import foto3 from '../../img/carrousel/carrousel3.jpg'

const pictures = [
    {
        name:'firstPicture',
        link:foto1
    }, 
    {
        name:'secondPicture',
        link:foto2
    }, 
    {
        name:'thirdtPicture',
        link:foto3
    }

]




function Carrousel() {
    const [indexImage, setIndexImage] = useState(0)

    const handleClickPrevious = ()=>{
        indexImage === 0? setIndexImage(pictures.length-1): setIndexImage(indexImage => indexImage-=1)
    }

    const handleClickNext = ()=>{
        indexImage === pictures.length-1? setIndexImage(0): setIndexImage(indexImage => indexImage+=1)
    }


useEffect(()=>{
    console.log(indexImage)
},[indexImage])

  return (
    <BgCarrousel>
        <ButtonCarrousel onClick={handleClickPrevious} side='left'><AiOutlineArrowLeft></AiOutlineArrowLeft></ButtonCarrousel>
        <Image src={pictures[indexImage].link}></Image>
        <Text>Baixe e compartilhe milhares de arquivos com pessoas de todo o planeta.</Text>
        <ButtonCarrousel onClick={handleClickNext} side='right'><AiOutlineArrowRight></AiOutlineArrowRight></ButtonCarrousel>
    </BgCarrousel>
  )
}

export default Carrousel