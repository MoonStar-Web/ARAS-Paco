import React from 'react'
import PageHeader from '../../components/PageHeader/pageheader'
import First from '../../components/Testimonial/First'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation()
  return (
    <>
    <Helmet>
    <title>{t('pagetitletestimonial')}</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Referanslar Sayfasi'/>
    </Helmet>
        <PageHeader title={t('home')} subtitle={t('testimonial')} common={t('pageheadertertimonial')}/>
        
        <First/>
        
    </>
  )
}

export default Testimonial