import React from 'react'
import Bradcom from '../../Bradcom/Main'
import First from './Menteamdeatils/First'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <>
    <Helmet>
    <title>Hakkımızda || ENDUSTRIYEL EKSPER</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Hakkimizda Sayfasi'/>
    </Helmet>   
    <Bradcom title={"Anasayfa"} subtitle={"Hakkımızda"} common={"Biz kimiz?"}/>
        
        <First/>
        
    </>
  )
}

export default About