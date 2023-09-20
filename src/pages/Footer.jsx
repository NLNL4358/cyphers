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

  const OrganizationSpreadName = [
    "제명",
    "상호",
    "이용등급",
    "등급분류번호",
    "등급분류일자",
    "제작업자신고번호"
  ]
  const OrganizationSpreadText = [
    "사이퍼즈 Teen",
    "(주) 네오플",
    "15세이용가 | 폭력성",
    "제CC-NP-110330-002호",
    "2011.03.30",
    "제2015-000001"
  ]

  return (
    <div className='FooterSection inner'>
      {/* <div className="FooterPadding"></div> */}
      <div className="Footer">
        <div className="FooterTop">
          {
            <ul className='FooterNavUl contents_inner'>
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
        <div className="FooterMain">
          <div className="FooterSNSWrap">
            <Link className='FooterSNS CyphersTwitterLink' to='https://twitter.com/cyp_joker'><img src="/img/icon/twitter.png" alt="" /></Link>
            <Link className='FooterSNS CyphersYoutubeLink' to='https://www.youtube.com/channel/UCrW3WvQdJIJ_dxUxtgou-3w'><img src="/img/icon/youtube.png" alt="" /></Link>
            <Link className='FooterSNS CyphersFaceBookLink' to='https://www.facebook.com/neople.joker/?locale=ko_KR'><img src="/img/icon/facebook.png" alt="" /></Link>
          </div>
          <div className="GameRegulatoryOrganizationWrap">
            <div className="OrganizationImageWrap">
              <img src="/img/icon/Korea_15.png" alt="" />
              <img src="/img/icon/Korea_violence_descriptor.png" alt="" />
            </div>
            <div className="OrganizationSpreadWrap">
              {
                OrganizationSpreadName.map((item, index)=>(
                  <div className="OrganizationSpreadSet">
                    <small className='OrganizationSpreadName'>{item}</small>
                    <small className='OrganizationSpreadText'>{OrganizationSpreadText[index]}</small>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="GameDeveloper">
            <Link to=''><img src="/img/icon/neopleSVG.svg" alt="" /></Link>
            <Link to=''><img src="/img/icon/nexonSVG.svg" alt="" /></Link>
          </div>
          <div className="FooterTextWrap">
            <small className='FooterSmallText'>
              ㈜ 네오플 대표이사 윤명진 | 제주특별자치도 제주시 1100로 3198-13 (노형동) | 전화 1588-7701 팩스 0502-258-8390
            </small>
            <small className='FooterSmallText'>
              E-mail : privacy@neople.co.kr 사업자등록번호 : 201-81-64417호 통신판매업 신고번호 : 제2017-제주노형-00064호 · 사업자정보확인
            </small>
            <small className='FooterSmallText'>
              © 2011 NEOPLE Inc. All Rights Reserved.
            </small>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer