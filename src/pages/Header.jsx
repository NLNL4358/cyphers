import React from 'react'

import {Link} from 'react-router-dom';

import '../css/Header.css';

const Header = () => {
  return (
    <div className='Header inner'>
      <div className="HeaderNexon">
        <div className="HeaderNexon_Left">
          <button className='HeaderNexon_Left_Button'>
            <img src="img/icon/hamburger.png" alt="" />
            <body>
              메뉴
            </body>
          </button>
        </div>

        <div className="HeaderNexon_Middle">
          <Link to="/">
            <img src="img/logo/logo_nexon.png" alt="" />
          </Link>
        </div>

        <div className="HeaderNexon_Right">
          <button className='NexonCard_Button'>
            <div className='HeaderSpriteIcon nexonCard' alt="" />
          </button>
          <button className='NexonPCRoom_Button'>
            <div className='HeaderSpriteIcon nexonPCRoom'  alt="" />
          </button>
          <body className='createAccount'>
            <Link to="/">넥슨 회원가입</Link>
          </body>
          <button className='LoginButton'>
            <body>
              넥슨 로그인
            </body>
          </button>
        </div>
      </div>
      <div className="HeaderMain"></div>
    </div>
  )
}

export default Header