import BGPH1 from '../../../assets/images/main-slider/main-slider-1-1.jpg'
import BGPH2 from '../../../assets/images/main-slider/main-slider-1-2.jpg'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link }  from 'react-router-dom'
import React  from 'react'
import { useTranslation } from 'react-i18next';

function Sliderone() {
    const { t } = useTranslation()
    return (
        <>
            <section className="main-slider">
            
                <Swiper className="swiper-container thm-swiper__slider"
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: "#main-slider__swiper-button-next",
                        prevEl: "#main-slider__swiper-button-prev"
                    }}
                    autoplay={{ delay: 5000 }}
                >
                    <div className="swiper-wrapper">
                    
                        <SwiperSlide>
                            <div className="swiper-slide">
           
                                <div className="image-layer" style={{ backgroundImage: `url(${BGPH1})` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <p>{t('slidertitle')}</p>
                                            <h2>{t('sliderdesc')}</h2>
                                            <Link to="/service-packaging-design" className=" thm-btn">{t('packdesigner')}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(${BGPH2})` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <p>{t('slidertitle2')}</p>
                                            <h2>{t('sliderdesc2')}</h2>
                                            <Link to="/service-packaging-study" className=" thm-btn">{t('packetüd')}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(${BGPH1})` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <p>{t('slidertitle3')}</p>
                                            <h2>{t('sliderdesc3')}</h2>
                                            <Link to="/service-process-improvement" className=" thm-btn">{t('process')}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: `url(${BGPH1})` }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <p>{t('slidertitle4')}</p>
                                        <h2>{t('sliderdesc4')}</h2>
                                        <Link to="/service-weeding-retouch" className=" thm-btn">{t('retouch')}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    </div>


                    <div className="main-slider__nav">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next"><i className="aras-icon-left-arrow"></i></div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev"><i className="aras-icon-right-arrow"></i></div>
                    </div>

                </Swiper>
           
            </section>
        </>
    )
}

export default Sliderone