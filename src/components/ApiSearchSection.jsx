import React from 'react'
import axios from 'axios' // Axios 라이브러리 추가

import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
/* API Key 는 환경변수를 사용 process.env.REACT_APP_API_KEY */

/* 
  플레이어 검색  <nickname> 안에 플레이어 닉네임 입력해줌
  https://api.neople.co.kr/cy/players?nickname=<nickname>&wordType=<wordType>&apikey=<키값>

  반환 받은 값
  {
  "rows" : [ {
    "playerId" : "플레이어 아이디",
    "nickname" : "닉네임",
    "represent" : {
      "characterId" : "1338a777b6aa275d2856b89390249f42",
      "characterName" : "트릭시"
    },
    "grade" : 급수
    } ]
  }
*/
/* 
  매칭 상세 검색 
  1. <playerId> 안에 플레이어 검색에서 받은 playerId 값을 넣어줘야한다.
  2. <gameTypeId> 안에 rating 혹은 normal 즉, useState인 gameType을 넣어줘야함
  3. <
  https://api.neople.co.kr/cy/players/<playerId>/matches?gameTypeId=<gameTypeId>&startDate=<startDate>&endDate=<endDate>&limit=<limit>&next=<next>&apikey=<키값>
*/
/* 
  API 가져오는 방법
   1. url에 로컬 Json 서버 주소 입력 (지금은 로컬 json인데 나중엔 진짜 json 형식의 api 주소적으면됨)
   2. url을 이용하여  response라는 변수에 fetch(url) 패치 하여 넘겨주는데 받을때까지 기다려야하니까 await를 붙혀준다
   3. response 가 json() 형식이라는 것을 알려주기위해 뒤에 .json() 을 붙히고 다 받고 넘겨줄 준비가될때 넘기기위해 await를 붙혀준다
   4. useState로 전달해준다.
*/

import "../css/ApiSearchSection.css"

const ApiSearchSection = (props) => {

  const userNameChange = (text) => {
    console.log("지금!!");
    props.setUserNickName(text);
  }
  
  /* 공식전rating, 일반전normal useState*/
  const [gameType, setGameType] = useState("rating");
  const changeGameType = (type)=>{
    if(type == "rating"){
      setGameType("normal");
    }
    else{
      setGameType("rating");
    }
  }
  function returningGameType(type){
    if(type == "rating"){
      return "공식전";
    }
    else{
      return "일반전";
    }
  }


  useEffect(()=>{
  },[])


  /* form 에 사용될 useState */
  const [userNameInput, setUserNameInput] = useState("");

  /* submit가 일어났을 때 호출할 함수 
  !! submit이 일어날땐 새로고침이 일어나기에 이를 막아줘야함 (외워야할 것) */
  const submitFunc = async (event) => {
    /* event.preventDefault() 를 이용해 새로고침을 막아준다 */
    event.preventDefault();

    /* 입력에 의해 변화된 ApiSearch의 useState값을 App.js 에서 선언한 useState에 넣어준다. */
    userNameChange(userNameInput);

    getPlayerID();
  }
  

    /* API 호출 [플레이어 ID] */
    const getPlayerID = async () =>{

      if(userNameInput == ""){
        return;
      }

      const url = `https://api.neople.co.kr/cy/players?nickname=${userNameInput}&wordType=<wordType>&apikey=${process.env.REACT_APP_API_KEY}`

      try{
        const response = await axios.get(url);
        if(!response.ok){
          throw new Error("Network response was not ok");
        }

        const data = response.data;

        props.setUserPlayerId(data);

      }

      catch (error) {
        console.log("An error occurred:", error.message);
      }
    }

  





  return (
    <div className='ApiSearchSection inner'>
      <img className='ApiPointBackgroundImage' src="img/backgrounds/ApiPointBackground.png" alt="" />
      <img className='ApiPointBackgroundImageMirror' src="img/backgrounds/ApiPointBackground.png" alt="" />
      <div className="ApiContentsWrap contents_inner">
        <img className='ApiContentsCharacterImage' src="img/characters/martinSD.png" alt="" />
        <h1 className='Macho ApiContentsName'>전적 검색</h1>
        <span className='ApiContentText'>
          능력자님의 전적을 검색할 수 있습니다. <br></br>
        </span>
  
        
        {/* 폼 - 인풋을 이용해 입력받은 텍스트를 전달해줄 수 있다.
        onSubmit 이라는 이벤트를 이용하면 제출이 되었을때 동작하는 함수를 호출할 수 있음 */}
        <form onSubmit={submitFunc} className='inputFrom'>
          <img className='NeopleApiLogo' src="img/logo/neopleApiLogopng.png" alt="" />
          <div className="inputWrap">
            <div className="inputText" onClick={()=>{changeGameType(gameType)}}>
              <p className='gameType'>
                {
                  returningGameType(gameType)
                }
              </p>
              <div className="slash"></div>
            </div>

            {/* value 값에는 useState인 userNameInput을 사용, 변화될때마다 event.target.value 값을 userNameInput에 넣어준다. */}
            <div className="plsTextHear">Search</div>
            <input className='ApiInputArea' type="text" placeholder='닉네임을 입력해 주세요' value={userNameInput}
            onChange={(event)=>{setUserNameInput(event.target.value)}} />

              {/* 제출을 위한 type = ' submit ' 버튼 */}
            <button type='submit' className='userNameSubmitButton'>
              <img className='userNameSubmitButtonImage' src="img/icon/search_icon.png" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApiSearchSection