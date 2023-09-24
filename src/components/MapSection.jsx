import React from 'react'

import { useNavigate } from 'react-router-dom'
import "../css/MapSection.css"
const MapSection = () => {

  const navigate = useNavigate();
  
  return (
    <div className='MapSection inner'>
      <img className='MapSectionBackground MapBackground' src="img/backgrounds/map3.png" alt=""data-aos="fade-up" data-aos-duration="1000" />
      <img className='MapSectionBackground TruperBackground' src="img/backgrounds/truper.png" alt="" data-aos="fade-up" data-aos-duration="1000"/>

      <div className="StorySectionTextWrap" data-aos="fade-up" data-aos-duration="1000">
        <h1 className='Macho MapMainName'>전장</h1>
        <h2 className='MapSubName'>결전의 장소, 그 속으로</h2>
        <h5 className='MapText'>사이퍼들의 승리를 위한 전략은<br></br>맵의 구조 지형물과 등장하는 기믹들에의해<br></br>매 순간 변화하고 팀원들과의 판단을 요구합니다.</h5>

        <div className="PointButtonWrap">
          <div className='Point1_Outline'></div>
          <button className='PointButton1 StoryButton'>
          <img className='StoryButtonHoverImage ButtonHoverImage' src="img/icon/buttonBack_black.png" alt="" /></button>
          <p className='PointButtonText_white'>전장(맵) 이해하기</p>
        </div>
      </div>
    </div>
  )
}

export default MapSection