import BGPH1 from '../../../../assets/images/main-slider/main-slider-1-1.jpg'
import BGPH2 from '../../../../assets/images/main-slider/main-slider-1-2.jpg'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link }  from 'react-router-dom'
import React  from 'react'

function Sliderone() {
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
                                            <p>Basit ve Güvenli Tasaım Süreci</p>
                                            <h2>İhtiyaçlarınıza çözüm üretiyoruz!</h2>
                                            <Link to="/about" className=" thm-btn">Ambalaj İhtiyacı</Link>
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
                                            <p>Basit ve Güvenli Tasaım Süreci</p>
                                            <h2>İhtiyaçlarınıza çözüm üretiyoruz!</h2>
                                            <Link to="/testimonial" className=" thm-btn">Referanslarımız</Link>
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
                                            <p>Basit ve Güvenli Tasaım Süreci</p>
                                            <h2>İhtiyaçlarınıza çözüm üretiyoruz!</h2>
                                            <Link to="/service" className=" thm-btn">Hizmetlerimiz </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>


                    <div className="main-slider__nav">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next"><i className="pylon-icon-left-arrow"></i></div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev"><i className="pylon-icon-right-arrow"></i></div>
                    </div>

                </Swiper>
           
            </section>
        </>
    )
}

export default Sliderone