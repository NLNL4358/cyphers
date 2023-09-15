import React from 'react'

import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
/* API Key 는 환경변수를 사용 process.env.REACT_APP_API_KEY */

import "../css/ApiSearchSection.css"

const ApiSearchSection = (props) => {

  const userNameChange = (text) => {
    props.setUserNickName(text);
  }

  console.log("userName : ", props.userNickName );
  useEffect(()=>{
  },[])


  /* form 에 사용될 useState */
  const [userNameInput, setUserNameInput] = useState("");

  /* submit가 일어났을 때 호출할 함수 
  !! submit이 일어날땐 새로고침이 일어나기에 이를 막아줘야함 (외워야할 것) */
  const submitFunc = (event) => {
    /* event.preventDefault() 를 이용해 새로고침을 막아준다 */
    event.preventDefault();

    /* 입력에 의해 변화된 ApiSearch의 useState값을 App.js 에서 선언한 useState에 넣어준다. */
    userNameChange(userNameInput);
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
            <div className="inputText">
              <p>능력자 검색</p>
            </div>

            {/* value 값에는 useState인 userNameInput을 사용, 변화될때마다 event.target.value 값을 userNameInput에 넣어준다. */}
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