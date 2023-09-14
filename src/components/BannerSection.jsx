import React from 'react'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
// import required modules

import {Navigation, Scrollbar, Autoplay } from 'swiper/modules';

import "../css/BannerSection.css"

const BannerSection = () => {
  return (
    <div className='BannerSection inner'>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        loop = {true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper CyphersBannerSwiper"
      >
        <SwiperSlide className='CyphersBannerSlide'>
          <Link to="/">
            <img className='CyphersBannerImage' src="img/slides/slideImage_1.png" alt="" />
            <div className="BannerTextWrap">
              <h4>꿈과 진주가</h4>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='CyphersBannerSlide'>
          <Link to="/">
            <img className='CyphersBannerImage' src="img/slides/slideImage_2.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='CyphersBannerSlide'>
          <Link to="/">
            <img className='CyphersBannerImage' src="img/slides/slideImage_3.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='CyphersBannerSlide'>
          <Link to="/">
            <img className='CyphersBannerImage' src="img/slides/slideImage_4.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='CyphersBannerSlide'>
          <Link to="/">
            <img className='CyphersBannerImage' src="img/slides/slideImage_5.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='CyphersBannerSlide'>
          <Link to="/">
            <img className='CyphersBannerImage' src="img/slides/slideImage_6.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='CyphersBannerSlide'>
          <Link to="/">
            <img className='CyphersBannerImage' src="img/slides/slideImage_7.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='CyphersBannerSlide'>
          <Link to="/">
            <img className='CyphersBannerImage' src="img/slides/slideImage_8.png" alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerSection