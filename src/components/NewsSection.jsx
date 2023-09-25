import React from 'react'

import {Link} from 'react-router-dom'

import "../css/NewsSection.css"

const magazineImageUrls = [
  "img/backgrounds/magazine_back1.png",
  "img/backgrounds/magazine_back2.png",
  "img/backgrounds/magazine_back3.png"
];
const magazineConceptName = [
  <h4 className='Jamsil newsAndMagazineConcept'>
    Cyphers<br></br>
    <point2>Magazine</point2>
  </h4>,
  <h4 className='Jamsil newsAndMagazineConcept'>
    Cyphers<br></br>
    <point2>Magazine</point2>
  </h4>,
  <h4 className='Jamsil newsAndMagazineConcept'>
    Cyphers<br></br>
    <point2>Magazine</point2>
  </h4>
];
const magazineConceptText = [
  <small className='newsAndMagazineConceptText'>
    각종 포지션 개편과 신규 <br></br>
    포지션 특성을 만나보세요!
  </small>,
  <small className='newsAndMagazineConceptText'>
    2nd 궁극기 4시즌 5인의 <br></br>
    영상 전체 공개!
  </small>,
  <small className='newsAndMagazineConceptText'>
    신도의 특권이 배틀 패스로 <br></br>
    새롭게 개편됩니다.
  </small>
];
const magazineInnerText = [
  <div className='newsAndMagazineInnerTextWrap'>
    <span className='newsAndMagazineInnerText'>
      <point2>[업데이트]</point2> 2023U 시즌 개편 안내
    </span>
    <body>9월 14일 적용되는  전장 개편 업데이트를 소개합니다.</body>
  </div>,
  <div className='newsAndMagazineInnerTextWrap'>
    <span className='newsAndMagazineInnerText'>
      <point2>[업데이트]</point2> [추가] 2nd 궁극기 4차 업데이트 캐릭터 안내
    </span>
    <body>8월 31일 예정된 업데이트를 소개합니다.</body>
  </div>,
  <div className='newsAndMagazineInnerTextWrap'>
    <span className='newsAndMagazineInnerText'>
      <point2>[업데이트]</point2> 신도의 특권 개편 안내
    </span>
    <body>8월 31일 신규 2nd 궁극기와 함께 변경되는 신도의 특권을 소개합니다.</body>
  </div>
];
const newsImageUrls = [
  "img/backgrounds/news_back1.jpg",
  "img/backgrounds/news_back2.jpg",
  "img/backgrounds/news_back3.jpg"
]


const newsInnerText = [
  <div className='newsAndMagazineInnerTextWrap newsInnerTextWrap'>
    <span className='newsAndMagazineInnerText'>
      <point2>[공지사항]</point2> 비매너 사용자 제재 결과 안내 (9월 12일)
    </span>
    <body>즐거운 게임 문화 형성을 위해 진행 중인 비매너 이용자 제재 안내입니다.</body>
  </div>,
  <div className='newsAndMagazineInnerTextWrap newsInnerTextWrap'>
    <span className='newsAndMagazineInnerText'>
      <point2>[전달사항]</point2> 신도의 특권 시스템 오류 보상&설문조사 안내
    </span>
    <body>능력자 여러분들의 의견을 확인할 수 있는 설문조사를 진행하려 합니다.</body>
  </div>,
  <div className='newsAndMagazineInnerTextWrap newsInnerTextWrap'>
    <span className='newsAndMagazineInnerText'>
      <point2>[개발소식]</point2> 클라이언트 패치 안내 ( 9월 1일 )
    </span>
    <body>9월 1일 이후 적용되는 패치내용을 확인하세요.</body>
  </div>
];

const NewsSection = () => {
  return (
    <div className='NewsSection inner'>
      <img className='NewsBackgroundCharacter' src="img/characters/userGuideRin.png" alt="" />
      <div className="NewsContentsWrap">
        <div className="CyphersMagazineWrap">
          <div className="CyphersMagazineNameWrap">
            <h3 className='Macho MagazineName'>사이퍼즈 매거진</h3>
            <div className="SmallNameWrap">
              <body className='SmallNameText'>최신 소식들을 매거진으로 만나보세요</body>
              <Link to="/" className='SmallNameLink'>더 많은 매거진 확인하기 <img src="img/icon/GoToMorePointColor1.svg" alt="" /></Link>
            </div>
          </div>
          <div className="CyphersNewsAndMagazineContentsWrap">
            {
              magazineImageUrls.map((item, index)=>(
                <Link key={index} className='CyphersNewsAndMagazineContentsLink' to='/'>
                  <div className="CyphersNewsAndMagazineContents" style={{backgroundImage : `url(${item})`}}>
                    <div className="NewsAndMagazineConceptWrap">
                      {magazineConceptName[index]}
                      {magazineConceptText[index]}
                    </div>
                    {magazineInnerText[index]}
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
        <div className="CyphersNewsWrap">
          <div className="CyphersNewsNameWrap">
            <h3 className='Macho NewsName'>새소식</h3>
            <div className="SmallNameWrap">
              <body className='SmallNameText'>사이퍼즈의 개발소식, 공지사항 등을  확인하세요.</body>
              <Link to="/" className='SmallNameLink'>더 많은 새소식 확인하기 <img src="img/icon/GoToMorePointColor2.svg" alt="" /></Link>
            </div>
          </div>
          <div className="CyphersNewsAndMagazineContentsWrap">
            {
              newsImageUrls.map((item, index)=>(
                <Link key={index} className='CyphersNewsAndMagazineContentsLink' to='/'>
                  <div className="CyphersNewsAndMagazineContents" style={{backgroundImage : `url(${item})`}}>
                    <div className="NewsAndMagazineConceptWrap"></div>
                    {newsInnerText[index]}
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection