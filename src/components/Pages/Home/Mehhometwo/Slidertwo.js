import BGMS1 from '../../assets/images/main-slider/main-slider-2-1.jpg'
import BGMS2 from '../../assets/images/main-slider/main-slider-2-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link }  from 'react-router-dom'
import React from 'react'
import { Navigation, Autoplay } from 'swiper';



function Slidertwo() {
    return (
        <>
            <section className="main-slider main-slider__two">
                <Swiper className="swiper-container thm-swiper__slider"
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: "#main-slider__swiper-button-next",
                        prevEl: "#main-slider__swiper-button-prev"
                    }}
                    autoplay={{ delay: 5000 }}>
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(${BGMS1})` }}>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8">
                                            <p>Welcome to Pylon Company</p>
                                            <h2>Building A Brigther Financial Future</h2>
                                            <div className="button-wrap">
                                                <Link to="#" className=" thm-btn">Apply For Loan</Link>
                                                <Link to="#" className=" thm-btn">Contact Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(${BGMS2})` }}>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8">
                                            <p>Welcome to Pylon Company</p>
                                            <h2>Building A Brigther Financial Future</h2>
                                            <div className="button-wrap">
                                                <Link to="#" className=" thm-btn">Apply For Loan</Link>
                                                <Link to="#" className=" thm-btn">Contact Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(${BGMS1})` }}>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8">
                                            <p>Simple & Secure Payment Process</p>
                                            <h2>Connecting
                                                All Your Loan
                                                Needs</h2>
                                            <div className="button-wrap">
                                                <Link to="#" className=" thm-btn">Apply For Loan</Link>
                                                <Link to="#" className=" thm-btn">Contact Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className="main-slider__nav">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next"><i className="pylon-icon-left-arrow"></i>
                        </div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev"><i className="pylon-icon-right-arrow"></i>
                        </div>
                    </div>
                </Swiper>
            </section>
        </>
    )
}

export default Slidertwo