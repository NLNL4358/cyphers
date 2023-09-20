import React from 'react'

import CypherPageTop from '../components/SubPageComponent/CypherPageComponent/CypherPageTop'
import CypherPageMain from '../components/SubPageComponent/CypherPageComponent/CupherPageMain'

import {useState} from 'react'


const CypherPage = () => {

  /* All 이면 전체선택 중, 각 태그를 누르면 그 태그로 set, 두번누르면 All로 set */
  const [positionTag, setPositionTag] = useState("All"); /* Tank, DPS(근딜), ADC(원딜), Sup */
  const [typeTag, setTypeTag] = useState("All"); /* CR(근거리), LD(원거리) */

  return (
    <div className='CypherPage'>
      <CypherPageTop></CypherPageTop>
      
      <div className="CypherPageTagWrap">
        
      </div>

      <CypherPageMain positionTag={positionTag} setPositionTag={(text)=>setPositionTag(text)} typeTag={typeTag} setTypeTag={(text)=>{setTypeTag(text)}}></CypherPageMain>
    </div>
  )
}

export default CypherPage