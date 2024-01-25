import React from 'react'
import Bredcom from '../../../Bradcom/Main'
import First from '../Menservise/First'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

const Service = () => {
  const { t } = useTranslation()

  return (
    <>
    <Helmet>
    <title>{t('pagetitleservice')}</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Hizmetler Sayfasi'/>
    </Helmet>
    <Bredcom title={t('Home')} subtitle={t('services')} common={t('pageheaderservice')} />
    <First/>
    </>
  )
}

export default Service