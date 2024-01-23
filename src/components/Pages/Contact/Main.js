import React from 'react'
import Bredcom from '../../Bradcom/Main'
import Leave from './Mencontact/Leave'
import Map from './Mencontact/Map'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
    <Helmet>
    <title>İletişim || ENDUSTRIYEL EKSPER</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım İletişim Sayfasi'/>
    </Helmet>

        <Bredcom title={"Anasayfa"} subtitle={"Bize Ulaşın"} common={"İletişim"}/>
        <Leave/>
        <Map/>
    </>
  )
}

export default Contact