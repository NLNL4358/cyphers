import React from 'react'

import "../../../css/SubPageCss/CypherPage.css"

const CypherPageTop = () => {
  return (
    <div className='CypherPageTop' inner>
      <div className="CypherPageTopWrap">
        <img className='CypherPageBackgroundImage' src="/img/characters/CypherPageMainBackground.svg" alt="" />
        <div className="CypherPageTopTextWrap">
          <h1 className='Bebas CypherPageTopTextWhite'>CHARACTER</h1>
          <h1 className='Bebas CypherPageTopTextColor'>ECLIPSE</h1>
          <span className='CypherPageTopText'>
            사이퍼즈 캐릭터를 소개합니다<br></br>
            능력자님의 사이퍼와 다양한 조합으로 전장에서 승리하세요.
          </span>
        </div>
      </div>
    </div>  
  )
}

export default CypherPageTop