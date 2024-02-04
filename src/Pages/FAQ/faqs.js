import React from 'react'
import PageHeader from '../../components/PageHeader/pageheader'
import Lower from '../../components/FAQ/Lower'
import { Helmet } from 'react-helmet'

const FAQ = () => {
    return (
        <>
        <Helmet>
        <title>SSS || ENDUSTRIYEL EKSPER</title>
        <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Sıkça Sorulan Sorular Sayfası Sayfasi'/>
        <meta name='keywords' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Sıkça Sorulan Sorular Sayfası Sayfasi'/>
        <link rel='canonical' href='https://eksperendustriyel.com.tr/' />
        </Helmet>
    
            <PageHeader title={"Anasayfa"} subtitle={"SSS"} common={"Sıkça Sorulan Sorular"}/>
            <Lower/>
        </>
    )
}

export default FAQ