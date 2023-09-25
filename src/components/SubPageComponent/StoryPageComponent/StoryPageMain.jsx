import StoryPage from 'react'

import {useState, useEffect} from 'react'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'

const StoryPageMain = () => {

  const navigate = useNavigate();
  const [targetStory, setTargetStory] = useState(0); /* 0 : Eclipse , 1 : Sup-M  2: : Blu-M  */
  useEffect(()=>{
    targetButtonChange(targetStory);
  },[targetStory])

  const StoryName = [
    "Eclipse",
    "SuperMoon",
    "BlueMoon"
  ]

  const StoryColum = {
    
      Eclipse : [
        "이클립스 인트로",
        "1장. 신비한 시작",
        "2장. 탄압, 그리고 회사와 연합",
        "3장. 격변의 시대",
        "4장. 새로운 세력, 그리고 첫 전쟁",
        "5장. 비운의 도시 포트레너드",
        "6장. 대공황과 2차 능력자 전쟁",
        "7장. 젊은 영웅",
        "8장. 동맹-인형실 끊기 작전",
        "9장. 우드시티 협약과 새로운 전쟁",
        "10장. 선택의 시간"
      ],
    
    
      SuperMoon : [
        "수퍼문 인트로",
        "1장. 다시 시작된 전쟁",
        "2장. 상징",
        "3장. 가려진 눈",
        "4장 세계는 다시 전운으로",
        "5장. 빌로시티 회담",
        "6장. 새로운 감옥 알카트라즈",
        "7장. 진실을 향한 추적",
        "8장. 비명의 탄생",
        "9장. 달의 이면",
        "10장. 우리가 선택한 길"
      ],
    
    
      BlueBoon : [
        "블루문 인트로",
        "1장. 작은 불씨",
        "2장. 빛이 있으라",
        "3장. 여정의 끝",
        "4장. 인식의 문",
        "5장. 뉴 딜"
      ]
    
  }

  const [targetButton, setTargetButton] = useState(["target","",""])
  const targetButtonChange = (index) => {
    const tempArray = ["","",""]
    tempArray[index] = "target"
    setTargetButton(tempArray);
  }


  const ChangeStoryPage = (index) =>{
    setTargetStory(index);
  }

  return (
    <div className='StoryPageMain inner'>
      <div className="StoryPageMainWrap">
        <div className="SelectTargetStoryButtonWrap">
          {
            StoryName.map((item,index)=>(
              <button key={index} onClick={()=>{ChangeStoryPage(index)}} id={`${item + "Button"}`} className={`BlackOps ${item + "Button"} StoryTargetButton ${targetButton[index]}`}>
                {item}
              </button>
            ))
          }
        </div>
        <div className="StoryPageContentsWrap">
          <div className={`StoryPageContent EclipsePage ${targetButton[0]}`}>
            <img className='StoryPageContentImage' src="/img/backgrounds/bg_world1_erase.jpg" alt="" />
            <div className="StoryPageContentTextWrap">
              <h1 className='StoryPageContentMainName Jamsil'>Eclipse</h1>
              <div className="StoryPageContentColumWrap">
                {
                  StoryColum.Eclipse.map((item,index)=>(
                    <Link key={index} className={`StoryPageContentColum ${index}`}>{item}</Link>
                  ))
                }
              </div>
            </div>
          </div>
          <div className={`StoryPageContent SuperMoonPage ${targetButton[1]}`}>
            <img className='StoryPageContentImage' src="/img/backgrounds/bg_world2_erase.jpg" alt="" />
            <div className="StoryPageContentTextWrap">
              <h1 className='StoryPageContentMainName Jamsil'>SuperMoon</h1>
              <div className="StoryPageContentColumWrap">
                {
                  StoryColum.SuperMoon.map((item,index)=>(
                    <Link key={index} className={`StoryPageContentColum ${index}`}>{item}</Link>
                  ))
                }
              </div>
            </div>
          </div>
          <div className={`StoryPageContent BlueMoonPage ${targetButton[2]}`}>
            <img className='StoryPageContentImage' src="/img/backgrounds/bg_world3_erase.jpg" alt="" />
            <div className="StoryPageContentTextWrap">
              <h1 className='StoryPageContentMainName Jamsil'>BlueBoon</h1>
              <div className="StoryPageContentColumWrap">
                {
                  StoryColum.BlueBoon.map((item,index)=>(
                    <Link key={index} className={`StoryPageContentColum ${index}`}>{item}</Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryPageMain