import React from 'react'

import StoryPageTop from '../components/SubPageComponent/StoryPageComponent/StoryPageTop'
import StoryPageMain from '../components/SubPageComponent/StoryPageComponent/StoryPageMain'

const StoryPage = () => {
  return (
    <div className='StoryPage'>
      <StoryPageTop></StoryPageTop>
      <div className="SubPageMiddleNav">
        <div className="MiddleNavWrap">
          <img className='MiddleNavHamburger' src="img/icon/hamburger.png" alt="" />
          <h4>게임정보</h4>
          <img className='MiddleNavNext' src="img/icon/ico_arrow_his.png" alt="" />
          <h4 className='PointColor1'>세계관</h4>
        </div>
      </div>
      <StoryPageMain></StoryPageMain>
    </div>
  )
}

export default StoryPage