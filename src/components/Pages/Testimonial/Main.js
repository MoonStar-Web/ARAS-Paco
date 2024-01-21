import React from 'react'
import Bredcom from '../../Bradcom/Main'
import First from './First'
import { Helmet } from 'react-helmet'

const Testimonial = () => {
  return (
    <>
    <Helmet>
    <title>Referanslar || ENDUSTRIYEL EKSPER</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Referanslar Sayfasi'/>
    </Helmet>
        <Bredcom title={"Anasayfa"} subtitle={"Referanslar"} common={"Görüşler"}/>
        
        <First/>
        
    </>
  )
}

export default Testimonial