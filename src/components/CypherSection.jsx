import React from 'react'

import { useNavigate } from 'react-router-dom'

import "../css/CypherSection.css"

const CypherSection = () => {

  const navigate = useNavigate();

  return (
    <div className='CypherSection inner'>
      <img className="CypherSectionBackground" src="img/backgrounds/cyphersCharacters.jpg" data-aos="fade-up" data-aos-duration="1000"></img>

      <div className="CypherSectionTextWrap"data-aos="fade-up" data-aos-duration="1000">
        <h1 className='Macho CypherMainName'>사이퍼</h1>
        <h2 className='CypherSubName'>승리를 위한 조합</h2>
        <h5 className='CypherText'>각기 다른 사이퍼들의 특성을 이해하고<br></br>자신과 팀원을 위한 사이퍼를 선택하세요</h5>
        <h5 className='CypherText'>총 70여 명의 사이퍼들로 이루어진 조합으로<br></br>팀원과의 협력을 이뤄내어 승리를 거머쥐세요.</h5>



        <div onClick={()=>{navigate("/CypherPage")}} className="PointButtonWrap">
          <div className='Point2_Outline'></div>
          <button className='PointButton2 CypherButton'>
          <img className='CypherButtonHoverImage ButtonHoverImage' src="img/icon/buttonBack_color.png" alt="" /></button>
          <p className='PointButtonText_black'>모든 사이퍼 보기</p>
          
        </div>
      </div>
      
    </div>
  )
}

export default CypherSection