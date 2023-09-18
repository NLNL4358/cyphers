import React from 'react'

import {Link} from 'react-router-dom'

import "../css/Footer.css"

const Footer = () => {

  const FooterNavText=[
    "회사 소개",
    "이용 약관",
    "개인정보 처리방침",
    "청소년 보호정책",
    "운영 정책",
    "넥슨 PC방",
    "확률형 아이템 목록",
    "오픈 API"
  ]

  return (
    <div className='FooterSection inner'>
      <div className="FooterPadding"></div>
      <div className="Footer">
        <div className="FooterTop contents_inner">
          {
            <ul className='FooterNavUl'>
              {
                FooterNavText.map((item,index)=>(
                  <li className={`FooterNavLi ${index}`}>
                    <Link className={`FooterNavLink ${index}`} to=''>
                      {item}
                    </Link>
                  </li>
                ))
              }
            </ul>
          }
        </div>
        <div className="FooterMain"></div>
      </div>
    </div>
  )
}

export default Footer