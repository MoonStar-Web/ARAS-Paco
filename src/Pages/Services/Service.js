import React from 'react'
import PageHeader from '../../components/PageHeader/pageheader'
import First from '../../components/Services/service/First'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';


const Service = () => {
  const { t } = useTranslation()

  return (
    <>
    <Helmet>
    <title>{t('pagetitleservice')}</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Hizmetler Sayfasi'/>
    <meta name='keywords' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Hizmetler Sayfasi'/>
    <link rel='canonical' href='https://eksperendustriyel.com.tr/' />
    </Helmet>
    <PageHeader title={t('Home')} subtitle={t('services')} common={t('pageheaderservice')} />
    <First/>
    </>
  )
}

export default Service