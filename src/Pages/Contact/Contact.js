import React from 'react'
import PageHeader from '../../components/PageHeader/pageheader'
import Leave from '../../components/Contact/Leave'
import Map from '../../components/Contact/Map'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const { t } = useTranslation()
  return (
    <>
    <Helmet>
    <title>{t('pagetitlecontact')}</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım İletişim Sayfasi'/>
    <meta name='keywords' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım İletişim Sayfasi'/>
    <link rel='canonical' href='https://eksperendustriyel.com.tr/' />
    </Helmet>

        <PageHeader title={t('home')} subtitle={t('contact')} common={t('pageheadercontact')}/>
        <Leave/>
        <Map/>
    </>
  )
}

export default Contact