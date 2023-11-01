import React from 'react'

import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import "../css/SubPageCss/UserRecordPreface.css"

/* props로 받은것  gameType,setGameType  , userNickName,setUserNickName , userPlayerId, setUserPlayerId*/
const UserRecordPreface = (props) => {
  
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const navigate = useNavigate();
  const [gameTypeState, setGameTypeState] = useState("rating");
  const [nickNameInputText, setNickNameInputText] = useState("");
  const changeSetGameTypeState = (event) => {
    event.preventDefault();
    if(gameTypeState == "rating"){
      setGameTypeState("normal");
      return;
    }
    setGameTypeState("rating");
    return;
  }
  const submitFuncInPreface = async (event) =>{
    event.preventDefault();
    if(nickNameInputText == "")return;
    const url = `${PROXY}/players?nickname=${nickNameInputText}&wordType=<wordType>&apikey=${process.env.REACT_APP_API_KEY}`;

    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const playerId = data.rows[0].playerId;

      await props.setUserPlayerId(playerId);

      navigate("/UserRecord");
    }
    catch(error){
      console.log("An error occurred:", error.message);
      alert("존재하지 않는 닉네임이거나 정보를 받지 못하였습니다.")
    }
  }
  // useEffect(()=>{
  //   if(nickNameInputText == "")return;
  //   props.setUserNickName(nickNameInputText);
  // },[nickNameInputText])
  useEffect(()=>{
    if(gameTypeState == "")return;
    props.setGameType(gameTypeState);
  },[gameTypeState])



  useEffect(()=>{
    setTimeout(()=>{alert("이곳에는 게임에서 사용되는 닉네임을 입력해야합니다.\n\n'ㅡFURYㅡ' 라는 닉네임은 제가 게임에 대해 배울때 시청했던 유튜버의 닉네임입니다. \n\n본인의 닉네임이 없다면 위의 닉네임을 입력해 주세요.")}, 500);
    
  },[])

  return (
    <div>
      <div className="userRecordPreface inner">
        <div className="userRecordPrefaceTopSpace inner"></div>
        <div className="userRecordPrefaceMain inner">
          <img className='userRecordPrefaceBackgroundImage' src="/img/characters/RecordPrefaceBackGroundChar.png" alt="" />
          <h1 className='userRecordPrefaceH1 BlackOps'>CYPHERS<br/><point1>RESEARCH</point1></h1>

          <div className="userRecordPrefaceSubmitWrap">
              <button onClick={(event)=>{changeSetGameTypeState(event)}} className={`userRecordPrefaceSearchCountry ${gameTypeState}`}>
                <p className={`userRecordPrefaceSearchCountryButtonText ${gameTypeState}`}>{ gameTypeState == undefined ? null : ( gameTypeState == "rating" ? "공식전" : "일반전")}</p>
              </button>
            <form onSubmit={submitFuncInPreface} action="" className='userRecordPrefaceSearchForm'>
              
              <input type="text" className='userRecordPrefaceUserInput' placeholder='닉네임을 정확히 입력해주세요      ex) ㅡFURYㅡ' value={nickNameInputText} onChange={(event)=>{setNickNameInputText(event.target.value)}} />
              <button type='submit' className='userRecordPrefaceUserSearchButton'>
                <img src="/img/icon/search_icon.png" alt="" />
              </button>
            </form>
          </div>

          <h5 className='userRecordPrefaceNoticeText'>전적은 공성전 시작을 기준으로 1시간마다 갱신됩니다<br/>닉네임이 정확히 일치하는 경우에만 검색이 가능합니다<br/>전적 데이터는 매 시즌 종료를 기준으로 초기화 됩니다<br/><br/>실시간 랭킹(Hero, Legend) 는 게임 내 ‘내 정보 - 랭킹’ 에서 확인할 수 있습니다</h5>
        </div>
      </div>
    </div>
  )
}

export default UserRecordPreface