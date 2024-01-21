import TEAMBG1 from  '../../assets/images/backgrounds/team-bg-1-1.jpg'
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link }  from "react-router-dom";
import React from 'react'

function Professional() {
    return (
        <>
            <section className="team-home">
                <img src="assets/images/shapes/team-shape-1-1.png" alt="" className="team-home__shape-1" />
                <img src="assets/images/shapes/team-shape-1-2.png" alt="" className="team-home__shape-2" />
                <div className="team-home__bg" style={{ backgroundImage: `url(${TEAMBG1})` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="team-home__content">
                                <div className="block-title text-left">
                                    <p>Professional & Experts</p>
                                    <h2>Meet the Best Agents</h2>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <div className="team-home__nav">
                                    <div className="swiper-button-prev" id="team-home__swiper-button-next"><i className="pylon-icon-left-arrow"></i></div>
                                    <div className="swiper-button-next" id="team-home__swiper-button-prev"><i className="pylon-icon-right-arrow"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-home__carousel-wrap ">
                    <Swiper className="thm-swiper__slider swiper-container"
                        modules={[Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        navigation={{
                            nextEl: "#team-home__swiper-button-next",
                            prevEl: "#team-home__swiper-button-prev"
                        }}
                        breakpoints={{
                            "0": {
                                "spaceBetween": 0,
                                "slidesPerView": 1
                            },
                            "376": {
                                "spaceBetween": 0,
                                "slidesPerView": 1
                            },
                            "576": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                            },
                            "768": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                            },
                            "992": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                            },
                            "1200": {
                                "spaceBetween": 30,
                                "slidesPerView": 3
                            }
                        }}>

                        <div className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="team-one__card">
                                        <div className="team-one__image">
                                            <img src="assets/images/team/team-1-1.png" alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <div className="team-one__social">
                                                <Link to="#" className="fab fa-facebook-square"></Link>
                                                <Link to="#" className="fab fa-twitter"></Link>
                                                <Link to="#" className="fab fa-pinterest-p"></Link>
                                                <Link to="#" className="fab fa-instagram"></Link>
                                            </div>
                                            <h3>Jerome Lindsey</h3>
                                            <span>Expert Agent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="team-one__card">
                                        <div className="team-one__image">
                                            <img src="assets/images/team/team-1-2.png" alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <div className="team-one__social">
                                                <Link to="#" className="fab fa-facebook-square"></Link>
                                                <Link to="#" className="fab fa-twitter"></Link>
                                                <Link to="#" className="fab fa-pinterest-p"></Link>
                                                <Link to="#" className="fab fa-instagram"></Link>
                                            </div>
                                            <h3>Ian Barker</h3>
                                            <span>Expert Agent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="team-one__card">
                                        <div className="team-one__image">
                                            <img src="assets/images/team/team-1-3.png" alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <div className="team-one__social">
                                                <Link to="#" className="fab fa-facebook-square"></Link>
                                                <Link to="#" className="fab fa-twitter"></Link>
                                                <Link to="#" className="fab fa-pinterest-p"></Link>
                                                <Link to="#" className="fab fa-instagram"></Link>
                                            </div>
                                            <h3>Nannie Robinson</h3>
                                            <span>Expert Agent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="team-one__card">
                                        <div className="team-one__image">
                                            <img src="assets/images/team/team-1-4.png" alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <div className="team-one__social">
                                                <Link to="#" className="fab fa-facebook-square"></Link>
                                                <Link to="#" className="fab fa-twitter"></Link>
                                                <Link to="#" className="fab fa-pinterest-p"></Link>
                                                <Link to="#" className="fab fa-instagram"></Link>
                                            </div>
                                            <h3>Rebecca Bass</h3>
                                            <span>Expert Agent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="team-one__card">
                                        <div className="team-one__image">
                                            <img src="assets/images/team/team-1-5.png" alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <div className="team-one__social">
                                                <Link to="#" className="fab fa-facebook-square"></Link>
                                                <Link to="#" className="fab fa-twitter"></Link>
                                                <Link to="#" className="fab fa-pinterest-p"></Link>
                                                <Link to="#" className="fab fa-instagram"></Link>
                                            </div>
                                            <h3>Antonio Rogers</h3>
                                            <span>Expert Agent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="team-one__card">
                                        <div className="team-one__image">
                                            <img src="assets/images/team/team-1-6.png" alt="" />
                                        </div>
                                        <div className="team-one__content">
                                            <div className="team-one__social">
                                                <Link to="#" className="fab fa-facebook-square"></Link>
                                                <Link to="#" className="fab fa-twitter"></Link>
                                                <Link to="#" className="fab fa-pinterest-p"></Link>
                                                <Link to="#" className="fab fa-instagram"></Link>
                                            </div>
                                            <h3>Fred Little</h3>
                                            <span>Expert Agent</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Professional