import React from 'react'
import Bredcom from '../../Bradcom/Main'
import Lower from './Lower'
import { Helmet } from 'react-helmet'

const FAQ = () => {
    return (
        <>
        <Helmet>
        <title>SSS || ENDUSTRIYEL EKSPER</title>
        <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Sıkça Sorulan Sorular Sayfası Sayfasi'/>
        </Helmet>
    
            <Bredcom title={"Anasayfa"} subtitle={"SSS"} common={"Sıkça Sorulan Sorular"}/>
            <Lower/>
        </>
    )
}

export default FAQ