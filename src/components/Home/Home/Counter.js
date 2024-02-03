
import FunFactBG1 from '../../../assets/images/backgrounds/funfact-bg-1-1.jpg'
import AnimatedNumber from "animated-number-react"
import React from 'react'
import { useTranslation } from 'react-i18next';

function Counter() {
    const { t } = useTranslation()
  return (
    <>
        <section className="funfact-one">
            <div className="funfact-one__bg" style={{ backgroundImage: `url(${FunFactBG1})`}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="funfact-one__box">
                            <h3><span className="odometer" data-count="99"><AnimatedNumber value={99} duration={9000} formatValue={(v) => Math.round(v)} /></span>%</h3>
                            <p>{t('counter1')}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="funfact-one__box">
                            <h3><span className="odometer" data-count="90"><AnimatedNumber value={90} duration={9000} formatValue={(v) => Math.round(v)} /></span>k</h3>
                            <p>{t('counter2')}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="funfact-one__box">
                            <h3><span className="odometer" data-count="650"><AnimatedNumber value={650} duration={9000} formatValue={(v) => Math.round(v)} /></span></h3>
                            <p>{t('counter3')}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="funfact-one__box">
                            <h3><span className="odometer" data-count="5"><AnimatedNumber value={5} duration={9000} formatValue={(v) => Math.round(v)} /></span></h3>
                            <p>{t('counter4')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Counter