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

const SlidesUrl = [
  "https://user-images.githubusercontent.com/100134222/268144911-29739443-fec8-414b-9e42-3088e9294d73.png",
  "https://user-images.githubusercontent.com/100134222/268144917-3c461b5f-32d4-47c0-b94e-f581e3d672f4.png",
  "https://user-images.githubusercontent.com/100134222/268144920-461df896-5b2e-4ee3-a245-f39a28a26bd2.png",
  "https://user-images.githubusercontent.com/100134222/268144923-4bbadd14-9ec8-4ecc-b0d1-71790f6f705c.png",
  "https://user-images.githubusercontent.com/100134222/268144926-701b9f0c-a472-489f-a44d-66a83530f603.png",
  "https://user-images.githubusercontent.com/100134222/268144928-a6280bd8-80d7-48ef-864c-9d80f57125cb.png",
  "https://user-images.githubusercontent.com/100134222/268144930-3dbf8ebb-80aa-45c9-9e96-c058a8daa8f5.png"
]

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
        {
          SlidesUrl.map((item,index)=>(
            <SwiperSlide className='CyphersBannerSlide'>
              <Link to="/">
                <img className='CyphersBannerImage' src={item} alt={`slideNumber ${index}`} />
              </Link>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </div>
  )
}

export default BannerSection