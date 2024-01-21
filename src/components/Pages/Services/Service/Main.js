import { Link}  from 'react-router-dom'
import React from 'react'
import Bredcom from '../../../Bradcom/Main'
import First from '../Menservise/First'
import { Helmet } from 'react-helmet'

const Service = () => {
  return (
    <>
    <Helmet>
    <title>Hizmetler || ENDUSTRIYEL EKSPER</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Hizmetler Sayfasi'/>
    </Helmet>
    <Bredcom title={"Anasayfa"} subtitle={"Hizmetler"} common={"Yetkinliklerimiz"}/>
    <First/>
    </>
  )
}

export default Service