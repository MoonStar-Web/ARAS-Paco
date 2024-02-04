import React from 'react'
import PageHeader from '../../PageHeader/pageheader'
import Retouch from '../servisedeatils/Retouch'
import { useTranslation } from 'react-i18next';

const ServiceRetouch = () => {
  const { t } = useTranslation()
  return (
    <>
    
        <PageHeader title={t('home')} subtitle={t('pageheaderservice')} common={t('retouch')}/>
        <Retouch />
    </>
  )
}

export default ServiceRetouch