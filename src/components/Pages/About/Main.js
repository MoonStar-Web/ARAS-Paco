import React from 'react'
import Bradcom from '../../Bradcom/Main'
import First from './Menteamdeatils/First'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()

  return (
    <>
    <Helmet>
    <title>{t('pagetitleabout')} </title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Hakkimizda Sayfasi'/>
    </Helmet>   
    <Bradcom title={t('home')} subtitle={t('about')} common={t('pageheaderabout')}/>
        
        <First/>
        
    </>
  )
}

export default About