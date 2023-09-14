import React from 'react'

import "../css/Main.css"

const Main = () => {
  return (
    <div className='Main inner'>
      <img className='MainGradation' src="img/backgrounds/gradation_main.png" alt="" />
      <div className="MainVideoWrap">
        <video src="https://user-images.githubusercontent.com/100134222/266777629-d1995a64-7373-45bb-820e-d997fc1eae3f.mp4" className='MainVideo' autoPlay muted loop="loop"></video>
      </div>
      <div className="MainCenterWrap" >
        <p data-aos="fade-up" data-aos-duration="1000">전략 액션 AOS 게임</p>
        <img src="img/logo/cyphers_logo_white.png" alt="" className='MainCenterLogo' data-aos="fade-up" data-aos-duration="1000"/>
        <button className='MainGamePlayButton ' data-aos="fade-up" data-aos-duration="1000">
          <div className="ButtonWrap">
          </div>
          <h4>지금 플레이하기</h4>
        </button>
      </div>

    </div>
  )
}

export default Main