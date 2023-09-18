import React from 'react'

import {Link,useNavigate} from 'react-router-dom'
import "../css/StorySection.css"


const StorySection = () => {

  const navigate = useNavigate();

  return (
    <div className='StorySection inner'>
      <img className='StorySectionBackground' src="img/backgrounds/storyBackground.png" alt="" data-aos="fade-up" data-aos-duration="1000" />
      <img className='StorySectionGradation' src="img/backgrounds/gradation.png" alt="" />

      <div className="StorySectionTextWrap" data-aos="fade-up" data-aos-duration="1000">
        <h1 className='Macho StoryMainName'>세계관</h1>
        <h2 className='StorySubName'>1860년, 『거대 일식』<br></br>이후 세계는 크게 바뀌었습니다.</h2>
        <h5 className='StoryText'>사이퍼들이 모인 런던, 트와일라잇에서 펼쳐지는<br></br>이야기를 확인하세요.</h5>

        <div onClick={()=>{navigate("/StoryPage")}} className="PointButtonWrap">
          <div className='Point1_Outline'></div>
          <button className='PointButton1 StoryButton'>
          <img className='StoryButtonHoverImage ButtonHoverImage' src="img/icon/buttonBack_black.png" alt="" /></button>
          <p className='PointButtonText_white'>스토리 한눈에 보기</p>
          
        </div>
      </div>
    </div>
  )
}

export default StorySection