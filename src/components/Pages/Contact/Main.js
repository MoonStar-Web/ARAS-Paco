import React from 'react'
import Bredcom from '../../Bradcom/Main'
import Leave from './Mencontact/Leave'
import Map from './Mencontact/Map'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation()
  return (
    <>
    <Helmet>
    <title>{t('pagetitlecontact')}</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım İletişim Sayfasi'/>
    </Helmet>

        <Bredcom title={t('home')} subtitle={t('contact')} common={t('pageheadercontact')}/>
        <Leave/>
        <Map/>
    </>
  )
}

export default Contact