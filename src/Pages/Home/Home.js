import React from 'react'
import Sliderone from '../../components/Home/Home/Sliderone'
import Offering from '../../components/Home/Home/Offering';
import Flexible from '../../components/Home/Home/Flexible';
import Gallery from '../../components/Home/Home/Gallery';
import Why from '../../components/Home/Home/Why';
import Quick from '../../components/Home/Hometwo/Quick';
import Business from '../../components/Home/Hometwo/Business';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import Counter from '../../components/Home/Home/Counter';

const Main = () => {

  const { t } = useTranslation()

  return (
    <>

    <Helmet>
    <title>{t('pagehometitle')}</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım Anasayfa'/>
    </Helmet>

        <Sliderone/>
        <Quick/>
        <Offering/>
        <Flexible/>
        <Gallery/>
        <Why/>
        <Business/>
        <Counter />
    
      
    </>
  )
}

export default Main