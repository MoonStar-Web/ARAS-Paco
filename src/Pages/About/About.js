import React from 'react'
import PageHeader from '../../components/PageHeader/pageheader'
import First from '../../components/About/First'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()

  return (
    <>
    <Helmet>
    <title>{t('pagetitleabout')}</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Hakkimizda Sayfasi'/>
    <meta name='keywords' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Hakkimizda Sayfasi'/>
    <link rel='canonical' href='https://eksperendustriyel.com.tr/' />
    </Helmet>   
    <PageHeader title={t('home')} subtitle={t('about')} common={t('pageheaderabout')}/>
        
        <First/>
          
    </>
  )
}

export default About