import React from 'react'

import "../../../css/SubPageCss/StoryPage.css"

const StoryPageTop = () => {
  return (
    <div className='StoryPageTop inner'>
      <div className="StoryPageTopWrap">
        {/* 이중 라우트 안에서 img의 경로는 img앞에 /  를 붙여줘야 된다 */}
        <img className='StoryPageBackgroundImage' src="/img/backgrounds/StoryPageMainImage.png" alt="" />
        <div className="StoryPageTopTextWrap" data-aos="fade-up" data-aos-duration="1000">
          <h1 className='Bebas StoryPageTopTextWhite'>UNIVERSE OF</h1>
          <h1 className='Bebas StoryPageTopTextColor'>CYPHERS</h1>
          <span className="StoryPageTopText">
          1860년, 거대 일식이 이후 생겨나는 신비한 현상들<br></br>
          트와일라잇으로 모인 능력자들의 이야기를 확인하세요
          </span>
        </div>
      </div>
    </div>
  )
}

export default StoryPageTop