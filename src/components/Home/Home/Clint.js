import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React  from 'react'
import a1 from "../../../assets/images/resources/a1.jpg"
import a2 from "../../../assets/images/resources/a2.jpg"
import a3 from "../../../assets/images/resources/a3.jpg"
import a4 from "../../../assets/images/resources/a4.jpg"
import a5 from "../../../assets/images/resources/a5.jpg"

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
                    autoplay={{delay:3000}}
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
                            <img src={a1} alt="Ambalaj Etüd" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={a2} alt="Endustriyel Tasarım" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={a3} alt="Karton Ambalaj Tasarım" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={a4} alt="Ahşap Ambalaj Tasarım" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={a5} alt="" />
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