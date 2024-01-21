
import { Autoplay , Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'

function Testimonials() {
    return (
        <>
            <section className="testimonials-one">
                <div className="container">
                    <div className="block-title text-center">
                        <p>Müşteri Görüşleri</p>
                        <h2>Müşterilerimiz bizim hakkımızda ne diyor?</h2>
                    </div>
                    <Swiper className="thm-swiper__slider swiper-container"
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        pagination={{
                            el: '.testimonials-one__swiper-pagination',
                            type: 'bullets',
                            clickable: true

                        }}
                        breakpoints={{
                            "376": {
                                "spaceBetween": 30,
                                "slidesPerView": 1,
                                "slidesPerGroup": 1
                            },
                            "576": {
                                "spaceBetween": 30,
                                "slidesPerView": 1,
                                "slidesPerGroup": 1
                            },
                            "768": {
                                "spaceBetween": 30,
                                "slidesPerView": 2,
                                "slidesPerGroup": 2
                            },
                            "992": {
                                "spaceBetween": 30,
                                "slidesPerView": 3,
                                "slidesPerGroup": 3
                            },
                            "1200": {
                                "spaceBetween": 30,
                                "slidesPerView": 3,
                                "slidesPerGroup": 3
                            }}}>
                        <div className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-1.png" alt="" />
                                            <h3>Clyde Williamson</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-2.png" alt="" />
                                            <h3>Vernon Ray</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-3.png" alt="" />
                                            <h3>Gary Dawson</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-1.png" alt="" />
                                            <h3>Clyde Williamson</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-2.png" alt="" />
                                            <h3>Vernon Ray</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-3.png" alt="" />
                                            <h3>Gary Dawson</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-1.png" alt="" />
                                            <h3>Clyde Williamson</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-2.png" alt="" />
                                            <h3>Vernon Ray</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonials-one__box">
                                        <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
                                        <div className="testimonials-one__box-info">
                                            <img src="assets/images/resources/testimonials-1-3.png" alt="" />
                                            <h3>Gary Dawson</h3>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                        <div className="testimonials-one__swiper-pagination swiper-pagination"></div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Testimonials