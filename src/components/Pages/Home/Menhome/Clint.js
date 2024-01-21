import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React  from 'react'

function Clint() {
  return (
    <>
        <div className="client-carousel pt-120 pb-120 client-carousel__has-border-top">
            <div className="container">
                <Swiper className="thm-swiper__slider swiper-container" 
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{delay:5000}}
                    breakpoints={{
                        "376": {
                            "spaceBetween": 30,
                            "slidesPerView": 2
                        },
                        "576": {
                            "spaceBetween": 30,
                            "slidesPerView": 3
                        },
                        "768": {
                            "spaceBetween": 30,
                            "slidesPerView": 3
                        },
                        "992": {
                            "spaceBetween": 30,
                            "slidesPerView": 4
                        },
                        "1200": {
                            "spaceBetween": 30,
                            "slidesPerView": 5
                        }
                    }}>
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        </SwiperSlide>

                    </div>
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default Clint