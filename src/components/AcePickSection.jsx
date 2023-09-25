import React from 'react'

import {Link} from 'react-router-dom'

import "../css/AcePickSection.css"


/* 객체 형태로 만들었다 but, 이래선 map을 사용할 수 없음*/
const AceContentsObject = 
{
  first : {
    imgUrl : "https://pub.cyphers.co.kr/thumbnail3/art/2023/09/07/1694049635236.png",
    contentTheme : "[그림]",
    contentName : "로판 이사벨",
    contentLike : "[4]",
    contentMainCharacterUrl : "https://resource.cyphers.co.kr/ui/img/character/ico_23px_26.jpg",
    contentUserName : "미시마ㅡ헤이하치"
  },
  second : {
    imgUrl : "https://pub.cyphers.co.kr/thumbnail3/art/2023/09/02/1693619337151.png",
    contentTheme : "[카툰]",
    contentName : "터프냥의 사이퍼즈일기",
    contentLike : "[6]",
    contentMainCharacterUrl : "https://resource.cyphers.co.kr/ui/img/character/ico_23px_77.jpg",
    contentUserName : "터프냥"
  },
  third : {
    imgUrl : "https://pub.cyphers.co.kr/thumbnail3/art/2023/09/07/1694071593871.png",
    contentTheme : "[인물]",
    contentName : "사이퍼즈 리사 코스프레",
    contentLike : "[18]",
    contentMainCharacterUrl : "https://resource.cyphers.co.kr/ui/img/character/ico_23px_44.jpg",
    contentUserName : "도토리킬러햄스터"
  },
  forth : {
    imgUrl : "https://resource.cyphers.co.kr/ui/img/thum/thum_news_default.jpg",
    contentTheme : "[팁]",
    contentName : "모든 장비, 유니크 대비 효율 정리",
    contentLike : "[19]",
    contentMainCharacterUrl : "https://resource.cyphers.co.kr/ui/img/character/ico_23px_78.jpg",
    contentUserName : "샤흐"
  }

}

/* 객체를 배열의 형태로 변환하는 Object.values(객체); 사용하기 */
const AceContentsArray = Object.values(AceContentsObject);
/* 이렇게 만들면 `AceContentsArray[0].키 = 값` 와 같이 불러올 수 있음 */

const AcePickSection = () => {
  return (
    <div className='AcePickSection inner'>
      <div className="AcePickNameTop">
        <div className="AcePickNameWrap contents_inner">
          <h1 className='BlackOps AcePickName'>ACE' Pick</h1>
          <div className="AcePickTextWrap">
            <body>능력자님들의 멋진 팬아트, 카툰, 팁 등을 만나보세요 </body>
            <Link to="/" className='SmallNameLink'>더 많은 새소식 확인하기 <img src="img/icon/GoToMorePointColor2.svg" alt="" /></Link>
          </div>
        </div>
      </div>
      <div className="AcePickMainWrap contents_inner">
        {
          /* 객체를 배열로 만들었기에 map을 사용할 수 있게된다. */
          AceContentsArray.map((item, index)=>(
            <Link key={index} to="/">
              <div className={`AceContentsWrap ${index}`}>
                <div className="AceContentsImageWrap">
                  <img className='AceContentsImage' src={item.imgUrl} alt="" />
                </div>
                <div className="AceContentsNameWrap">
                  <small className='AceContentsTheme'>
                    {item.contentTheme}
                  </small>
                  <div className="AceContentsName">
                    <span className='AceContentsText'>{item.contentName}</span>
                    <body className='AceContentsLike'>
                      {item.contentLike}
                    </body>
                  </div>
                  <div className="AceContentsUserWrap">
                    <img src={item.contentMainCharacterUrl} alt="" />
                    <body>{item.contentUserName}</body>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default AcePickSection