import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <>
    <section className="page_404">

    <Helmet><title>{t('page404title')}</title>
    <meta name='description' content='Eksper Endüstriyel Notfound'/>
    </Helmet>

    <div className="container">
      <div className="row">	
      <div className="col-sm-12 text-center">
      <div className="col-sm-10 col-sm-offset-1 text-center">
      <div className="four_zero_four_bg">
        <h1 className="text-center">{t('404title')}</h1>
      
      
      </div>
      
      <div className="contant_box_404">
      <h3 className="h2">
      {t('lost')}
      </h3>
      
      <p>{t('notavailble')}</p>
      
      <a href="/" className="h1 font-bold btn btn-warning text-white">{t('backhome')}</a>
    </div>
      </div>
      </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default NotFound