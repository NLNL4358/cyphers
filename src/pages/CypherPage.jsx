import React from 'react'

import CypherPageTop from '../components/SubPageComponent/CypherPageComponent/CypherPageTop'
import CypherPageMain from '../components/SubPageComponent/CypherPageComponent/CypherPageMain'

import {useState} from 'react'


const CypherPage = () => {



  return (
    <div className='CypherPage'>
      <CypherPageTop></CypherPageTop>
      
      <div className="CypherPageTagWrap">
        
      </div>

      <CypherPageMain></CypherPageMain>
    </div>
  )
}

export default CypherPage