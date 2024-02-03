import React from 'react'
import { Link}  from 'react-router-dom'
import about from "../../assets/images/about/about.png"
import tec from "../../assets/images/about/tecrübe.png"
import tecin from "../../assets/images/about/tecinf.png"
import { useTranslation } from 'react-i18next';

function First() {
    const { t } = useTranslation()
    return (
        <>
            <section className="team-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={about} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="team-details__content">
                                <h2>Recai Taban</h2>
                                <span>{t('aboutwork')}</span>
                                <p>{t('aboutdesc')}</p>
                                <div className="why-choose__progress">
                                    <div className="why-choose__progress-top">
                                        <h3>{t('aboutexper')}</h3>
                                        <span>100%</span>
                                    </div>
                                    <div className="why-choose__progress-bar">
                                        <span style={{ width: '100%' }} className="wow slideInLeft" data-wow-duration="1500ms"></span>
                                    </div>
                                </div>
   
                                <div className="team-details__certificates">
                                    <img src={tec} width={75} alt="" />
                                    <img src={tecin} width={75} alt="" />
                                </div>
                                <div className="team-details__social">
                                    <Link to="#" className="fab fa-facebook-square"></Link>
                                    <Link to="#" className="fab fa-twitter"></Link>
                                    <Link to="#" className="fab fa-linkedin"></Link>
                                    <Link to="#" className="fab fa-instagram"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First