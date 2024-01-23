
import React from 'react'
import Sliderone from './Menhome/Sliderone'
import Offering from './Menhome/Offering';
import Flexible from './Menhome/Flexible';
import Trusted from './Menhome/Trusted';
import Counter from './Menhome/Counter';
import Testimonials from './Menhome/Testimonials';
import Why from './Menhome/Why';
import Quick from './Mehhometwo/Quick';
import Video from './Mehhometwo/Video';
import Business from './Mehhometwo/Business';
import Clint from './Menhome/Clint';
import { Helmet } from "react-helmet";


const Main = () => {



  return (
    <>

    <Helmet>
    <title>Anasayfa || ENDUSTRIYEL EKSPER</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Anasayfa'/>
    </Helmet>

        <Sliderone/>
        <Quick/>
        <Offering/>
        <Flexible/>
        <Trusted/>
        <Counter/>
        <Testimonials/>
        <Why/>
        <Video/>
        <Business/>
        <Clint/>
      
    </>
  )
}

export default Main