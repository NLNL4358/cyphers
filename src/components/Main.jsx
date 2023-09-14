import React from 'react'

import "../css/Main.css"

import {useState, useEffect} from 'react'

const Main = () => {

  const videoUrls = [
    "https://user-images.githubusercontent.com/100134222/267958691-25728165-56dd-4b73-92c1-1a61cc584dac.mp4",
    "https://user-images.githubusercontent.com/100134222/267958860-c3bb06c9-7350-44cd-9a0e-54338fd276ee.mp4",
    "https://user-images.githubusercontent.com/100134222/267959206-baa899c0-4d32-437d-9728-cad243bc6697.mp4"
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  /* useEffect 훅을 사용해서 비디오에 이벤트 리스너를 추가한것 처럼 동작하도록 설계
  useState인 currentVideoIndex가 재랜더링 될때(event)마다 useEffect내부가 동작할 것임 */
  useEffect(() => {
    /* video의 id를 이용하여 videoPlayer라는 이름으로 변수생성  */
    const videoPlayer = document.getElementById('videoPlayer');

    /* !! 비디오의 재생이 끝날 때  */
    const handleEnded = () => {
      if (currentVideoIndex < videoUrls.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      } else {
        setCurrentVideoIndex(0);
      }
    };
    videoPlayer.addEventListener('ended', handleEnded);

    return () => {
      videoPlayer.removeEventListener('ended', handleEnded);
    };
  }, [currentVideoIndex]);
  
  return (
    <div className='Main inner'>
      <img className='MainGradation' src="img/backgrounds/gradation_main.png" alt="" />
      <div className="MainVideoWrap">
        {/* videoUrls 의 갯수만큼 동영상을 자동으로 순차재생하는 기믹
             */}
        <video className='MainVideo' id="videoPlayer" src={videoUrls[currentVideoIndex]} controls autoPlay muted />
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