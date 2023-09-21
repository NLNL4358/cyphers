import React from 'react'

import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import '../css/Header.css';


const Header = () => {

  const gnbList = [
    '새소식',
    '게임정보',
    '랭킹',
    '리그',
    '커뮤니티',
    '고객센터'
  ];
  const snbList = [
    [
      '공지사항',
      '업데이트',
      '매거진',
      '이벤트'
    ],

    [
      '세계관',
      '캐릭터 이클립스',
      '게임가이드',
      '멀티미디어 박스',
      '아이템 박스'
    ],

    [
      '통합랭킹',
      '캐릭터랭킹',
      '캐릭터통계',
      '전적검색'
    ],

    [
      '리그검색',
      '리그이벤트'
    ],

    [
      'ACE게시판',
      '밸런스토론장',
      '공략게시판',
      '자유게시판',
      '팬아트게시판',
      '인증게시판',
      '클랜게시판',
      '거래게시판'
    ],

    [
      '서비스센터',
      '다운로드',
      '청소년 보호 프로그램',
      '약관 및 정책'
    ]
  ];

  /* 스크롤되었을때 HeaderNexon의 높이 0으로 만들자 */
  let [headerScroll, setHeaderScroll] = useState("");
  /* 스크롤 양 */
  let [scrollAmount, setScrollAmount] = useState(0);
  let [gnbHover, setGnbHover] = useState("");

  const gnbMouseOver = (index) => {
    setGnbHover("hover");
  }
  const gnbMouseOut = (index) => {
    setGnbHover("");
  }

  /* 스크롤 판단함수 선언 */
  const judgeGnbHover = (target) => {
    if(target > 70){
      setHeaderScroll("scrolled");
    }
    else{
      setHeaderScroll("");
    }
  }
  /* 마운트 됐을때 이벤트 리스너 등록 */
  useEffect(()=>{
    /* 스크롤양의 useState 를 set해주는 함수를 작성*/
    const handleScroll = () => {
      setScrollAmount(window.scrollY);
    }
    /* scroll 이벤트에 맞춰 함수를 호출 */
    window.addEventListener("scroll", handleScroll);


    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  /* useEffect를 사용하여 useState인 scrollAmount가 변화할때마다 판단하는 함수 호출!! */
  useEffect(()=>{
    judgeGnbHover(scrollAmount);
  },[scrollAmount])




  
  return (
    <div className='Header inner'>
      <div className={`HeaderNexon ${headerScroll}`}>
        <div className="HeaderNexon_Left">
          <button className='HeaderNexon_Left_Button'>
            {/* 메인과 이중라우트 두곳에서 모두 보이게하기위해 img의 경로 앞에 / 를 붙힌다 */}
            <img src="/img/icon/hamburger.png" alt="" />
            <body>
              메뉴
            </body>
          </button>
        </div>

        <div className="HeaderNexon_Middle">
          <Link to="/">
            <img src="/img/logo/logo_nexon.png" alt="" />
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
      {/* 스크롤 되었을때 상단 fix  */}
      <div className="HeaderMainWrap ">
        <div className={`HeaderMain inner ${headerScroll} ${gnbHover}`}>
          <div className="HeaderMainTop">
            <div className="LogoWrap">
              <Link to="/">
                <img className="LogoImage" src="/img/logo/cyphers_logo.png" alt="" />
              </Link>
            </div>

            <div className="GnbWrap" onMouseOver={gnbMouseOver} onMouseOut={gnbMouseOut}>
              <ul className='GnbUl'>
                {
                  gnbList.map((item, index)=>(
                    <li className={`GnbLi ${index}`}>
                      <Link>
                        <p>
                          {item}
                        </p>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            
            <div className="GameStartWrap">
              <Link to='/' className='HeaderMainLogInButton'>
                <div className='HeaderMainLoginIcon' alt="" />
                <span>Login</span>
              </Link>

              <button className='HeaderGameStartButton'>
                <h4 className='BlackOps PointColor1'>Game Start</h4>
                <img src="/img/icon/buttonBack_color.png" alt="" />
              </button>
            </div>
          </div>
          <div className={`HeaderMainBottom ${gnbHover}`} onMouseOver={gnbMouseOver} onMouseOut={gnbMouseOut}>
            <div className="SnbWrap">
              <ul className='SnbUl' onMouseOver={gnbMouseOver} onMouseOut={gnbMouseOut}>
                {
                  snbList.map((item, index)=>(
                    <li className={`SnbLi ${index}`}>
                      {
                        item.map((item, index)=>(
                          <Link className='SnbText'>
                            {item}
                          </Link>
                        ))
                      }
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header