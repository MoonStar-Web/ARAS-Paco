import React from 'react';
import trust from "../../../assets/images/shapes/trust.png";
import security from "../../../assets/images/shapes/security.png";
import WhyChoose from '../../../assets/images/resources/why-choose-1-1.gif'
import { useTranslation } from 'react-i18next';

function Why() {
    const { t } = useTranslation()
    return (
        <>
            <section className="why-choose">
                <img src={security} className="why-choose__shape-1" alt="" />
                <img src={trust} className="why-choose__shape-2" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="why-choose__image">
                                <p><i className="aras-icon-investment"></i>{t('experience')}</p>
                                <img src={WhyChoose} width="600" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose__content">
                                <div className="block-title text-left">
                                    <p>{t('advantage')}</p>
                                    <h2>{t('advtitle')}</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="why-choose__box">
                                            <h3><i className="fa fa-caret-right"></i>{t('profteam')}</h3>
                                            <p>{t('teamdesc')}</p>
                
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="why-choose__box">
                                            <h3><i className="fa fa-caret-right"></i>{t('ease')}</h3>
                                            <p className='h1'>{t('easedesc')}</p>
                                            <p className='h1'>{t('easedesc2')}</p>
                                            <p className='h1'>{t('easedesc3')}</p>
                                            <p className='h1'>{t('easedesc4')}</p>
                                            <p className='h1'>{t('easedesc5')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-choose__progress">
                                    <div className="why-choose__progress-top">
                                        <h3>{t('demandresponse')}</h3>
                                        <span>99%</span>
                                    </div>
                                    <div className="why-choose__progress-bar">
                                        <span style={{ width: '99%' }} className="wow slideInLeft" data-wow-duration="1500ms"></span>
                                    </div>
                                </div>
                                <div className="why-choose__progress">
                                    <div className="why-choose__progress-top">
                                        <h3>{t('counseling')}</h3>
                                        <span>99%</span>
                                    </div>
                                    <div className="why-choose__progress-bar">
                                        <span style={{ width: '99%' }} className="wow slideInLeft" data-wow-duration="1500ms"></span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Why