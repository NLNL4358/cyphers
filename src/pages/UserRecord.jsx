import React from 'react'

import {useState, useEffect} from 'react'
import "../css/SubPageCss/UserRecord.css"

import UserRecordComponent from '../components/SubPageComponent/UserRecordComponent/UserRecordComponent'

/* Pops로 받은 데이터 정리 
  userNickName : 유저 닉네임
  gameType : 게임타입 rating, normal
  userPlayerId : 유저 고유Id
  userMatchData : 유저 매치 Data

  => 유저 매치 데이터를 주로 이용하게될듯,
  userMatchData.nickname   닉네임
  userMatchData.tierName   티어
  userMatchData.clanName   클랜이름
  userMatchData.grade      급수
  userMatchData.ratingPoint 현재 RP
  userMatchData.maxRatingPoint 시즌 최대 RP
  userMatchData.represent.characterId  대표 캐릭터 Id

  공식 혹은 일반전 승, 패, 중단 [0] : 공식 / [1] : 일반
  userMatchData.records[0or1].winCount
  userMatchData.records[0or1].loseCount
  userMatchData.records[0or1].stopCount

  전적 rows[숫자] 에서 숫자에 해당하는것이 0일수록 최신 수행한 게임! 
  userMatchData.matches.rows[0].date  게임을 수행한 날자 2023-01-01 01:01
  userMatchData.matches.rows[0].map.name   게임에 이용된 맵
  userMatchData.matches.rows[0].position.name  게임에서 취한 포지션 (탱커, 서포터 등등..)
  userMatchData.matches.rows[0].position.attribute[0~3].id  게임에서 사용된 특성 4가지 ID값
  userMatchData.matches.rows[0].playInfo.characterId  게임에서 사용한 캐릭터 ID값
  userMatchData.matches.rows[0].playInfo.result   게임에서 이겼는지 졌는지  ( 'win' or 'lose')
  userMatchData.matches.rows[0].playInfo.level    게임에서 달성한 레벨
  userMatchData.matches.rows[0].playInfo.killCount   게임에서 Kill 카운트
  userMatchData.matches.rows[0].playInfo.deathCount   '' Death 카운트
  userMatchData.matches.rows[0].playInfo.assistCount  '' Assist 카운트


  userMatchData.matches.rows[0].matchId  게임의 matchId  --> 이거는 이제 매칭 상세정보로 이동가능
*/



const UserRecord = (props) => {

  /* Netlify 호스팅을 위한 세팅 */
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';


  useEffect(()=>{
    getMatch();
    getRank();
  },[])

  useEffect(()=>{
    if(props.userMatchData == ""){
      return;
    }
    /* UserRecord의 useState를 이때 바꿔줌 */
    replaceUseStateInRecord();
    setUserTierImage();
    setUserWinAndLose();
  },[props.userMatchData])


  /* 다른 유저를 클릭하였다면 그 유저로 대상을 바꿔주자 */
  useEffect(()=>{
    if(props.userPlayerId ==""){
      return;
    }
    getMatch();
    getRank();
    /* 자연스럽게 바뀌도록 스크롤 탑 && 0.5초 후 page 0으로만들기 */
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(()=>{setMorePage(0);},500);
  },[props.userPlayerId])

  /* GameType이 바뀌었을때 다시금 matchData 가져오도록! */
  useEffect(()=>{
    if(props.gameType == ""){return;}
    getMatch();
  },[props.gameType])

  /* 매치 검색 */
  const getMatch = async () => {

    /* 시간 (<startDate> , <endDate>) 이 꼭 필요하다!! */
    let currentDay = new Date();
    let dateFormat1 = currentDay.getFullYear() + "-" + ( (currentDay.getMonth()) < 9 ? "0" + (currentDay.getMonth()+1) : (currentDay.getMonth()+1) ) + "-" + ( (currentDay.getDate()) < 9 ? "0" + (currentDay.getDate()) : (currentDay.getDate()) ) +" "+ (currentDay.getHours())+":"+(currentDay.getMinutes());
    let threeMonthAgo = new Date(currentDay.setMonth(currentDay.getMonth() - 2));
    let dateFormat2 = threeMonthAgo.getFullYear() + "-" +  ( (threeMonthAgo.getMonth()) < 9 ? "0" + (threeMonthAgo.getMonth()+1) : (threeMonthAgo.getMonth()+1) ) + "-" + ( (threeMonthAgo.getDate()) < 9 ? "0" + (threeMonthAgo.getDate()) : (threeMonthAgo.getDate()) ) +" "+ (currentDay.getHours())+":"+(currentDay.getMinutes()+1);


    /* Netlify 호스팅을 위한 세팅 */
    const url = `${PROXY}/players/${props.userPlayerId}/matches?gameTypeId=${props.gameType}&startDate=${dateFormat2}&endDate=${dateFormat1}&limit=100&apikey=${process.env.REACT_APP_API_KEY}`;

    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      let gameIndex = 0;  /* 공식이면 0 , 일반이면 1 */
      if(props.gameType == "normal"){
        gameIndex = 1;
      }
      /* data.records[0 or 1].winCount or LoseCount or stopCount */
      const MatchData = await data;

      /* UserRecord로 가기전에 완료하고 가야하기때문에 await를 걸어줌 */
      await props.setUserMatchData(MatchData);
    }

    catch(error){
      console.log("An error occurred:", error.message);
    }
  }

  /* 랭킹 검색 */
  const getRank = async () => {
    const targetUserUrl = `${PROXY}/ranking/ratingpoint?playerId=${props.userPlayerId}&offset=<offset>&limit=<limit>&apikey=${process.env.REACT_APP_API_KEY}`;
    /* playerId를 아예 없애면 offset 부터 10개 가져옴  */
    const topTenUserUrl = `${PROXY}/ranking/ratingpoint?playerId=&offset=0&limit=10&apikey=${process.env.REACT_APP_API_KEY}`;

    try{
      const targetUserResponse = await fetch(targetUserUrl);
      const topTenUserResponse = await fetch(topTenUserUrl);
      if(!targetUserResponse.ok || !topTenUserResponse.ok){
        throw new Error("Network response was not ok");
      }
      const targetUserRankData = await targetUserResponse.json();
      const topTenUserRankData = await topTenUserResponse.json();

      await setTargetUserRankData(targetUserRankData.rows);
      await setRankingUserRankData(topTenUserRankData.rows);
    }
    catch(error){
      console.log("An error occurred:", error.message);
    }
  }

  const [representCharacterId, setRepresentCharacterId] = useState("");
  const [tierImageUrl, setTierImageUrl] = useState("");
  const [ratingWinCount, setRatingWinCount] = useState(0);
  const [ratingLoseCount, setRatingLoseCount] = useState(0);
  const [ratingStopCount, setRatingStopCount] = useState(0);
  const [ratingWiningPercent, setRatingWiningPercent] = useState(0.0);
  const [normalWinCount, setNormalWinCount] = useState(0);
  const [normalLoseCount, setNormalLoseCount] = useState(0);
  const [normalStopCount, setNormalStopCount] = useState(0);
  const [normalWiningPercent, setNormalWiningPercent] = useState(0.0);
  const [targetUserRankData, setTargetUserRankData] = useState("");
  const [rankingUserRankData, setRankingUserRankData] = useState("");
  const [nickNameInputText, setNicknameInputText] = useState("")

  const submitFunc = async (event) =>{
    event.preventDefault();
    if(nickNameInputText == "")return;
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    const url = `${PROXY}/players?nickname=${nickNameInputText}&wordType=<wordType>&apikey=${process.env.REACT_APP_API_KEY}`;

    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const playerId = data.rows[0].playerId;

      props.setUserPlayerId(playerId);
    }
    catch(error){
      console.log("An error occurred:", error.message);
      alert("존재하지 않는 닉네임이거나 정보를 받지 못하였습니다.")
    }

    /* 초기화 */
    setNicknameInputText("");
  }

  const replaceUseStateInRecord = () => {
    setRepresentCharacterId(props.userMatchData.represent.characterId);
  }
  
  /* 티어이미지 */
  const setUserTierImage = ()=>{
    if(props.userMatchData.tierName == ""){
      return ;
    }
    else if(props.userMatchData.tierName == null){
      setTierImageUrl("/img/icon/tier-none.png")
    }
    else if(props.userMatchData.tierName.includes("ACE")){
      setTierImageUrl("/img/icon/tier-ace.png")
    }
    else if(props.userMatchData.tierName.includes("JOKER")){
      setTierImageUrl("/img/icon/tier-joker.png")
    }
    else if(props.userMatchData.tierName.includes("GOLD")){
      setTierImageUrl("/img/icon/tier-gold.png")
    }
    else if(props.userMatchData.tierName.includes("SILVER")){
      setTierImageUrl("/img/icon/tier-silver.png")
    }
    else if(props.userMatchData.tierName.includes("BRONZE")){
      setTierImageUrl("/img/icon/tier-bronze.png")
    }
  }
  /* 승패 useState */
  const setUserWinAndLose = ()=>{
    if(props.userMatchData.records[0] != undefined){
      setRatingWinCount(props.userMatchData.records[0].winCount);
      setRatingLoseCount(props.userMatchData.records[0].loseCount);
      setRatingStopCount(props.userMatchData.records[0].stopCount);
      if(props.userMatchData.records[0].winCount == 0 && props.userMatchData.records[0].loseCount == 0 && props.userMatchData.records[0].stopCount == 0){
        setRatingWiningPercent("-");
      }
      else{
        setRatingWiningPercent(((props.userMatchData.records[0].winCount / (props.userMatchData.records[0].winCount + props.userMatchData.records[0].loseCount + props.userMatchData.records[0].stopCount))*100).toFixed(2));
      }
    }

    if(props.userMatchData.records[1] != undefined){
      setNormalWinCount(props.userMatchData.records[1].winCount);
      setNormalLoseCount(props.userMatchData.records[1].loseCount);
      setNormalStopCount(props.userMatchData.records[1].stopCount);
      if(props.userMatchData.records[1].winCount == 0 && props.userMatchData.records[1].loseCount == 0 && props.userMatchData.records[1].stopCount == 0){
        setNormalWiningPercent("-");
      }
      else{
        setNormalWiningPercent((((props.userMatchData.records[1].winCount)/(props.userMatchData.records[1].winCount + props.userMatchData.records[1].loseCount + props.userMatchData.records[1].stopCount))*100).toFixed(2));
      }
    }
  }

  /* 공식, 일반 Type 변경 */
  const changeGameType = () => {
    if(props.gameType == ""){
      return;
    }
    else if(props.gameType == "rating"){
      props.setGameType("normal");
    }
    else if(props.gameType == "normal"){
      props.setGameType("rating");
    }
  }

  /* morePage는 0 -> 9 까지 늘어나며 10개씩 컴포넌트를 보여주는 용 */
  const [morePage, setMorePage] = useState(0);

  const seeMorePage = () =>{
    setMorePage(morePage+1);
  }

  return (
    <div className='UserRecord inner'>
      <div className="userRecordTopSpace"></div>
      <div className="userRecordHeader">
        <div className="userRecordHeaderInner contents_inner">
          <p className='Macho userRecordHeaderName'>플레이어 전적검색</p>
          <form onSubmit={submitFunc} action="" className='userRecordSearchForm'>
            <div className="userRecordSearchCountry ">
              <p className='BlackOps'>KR</p>
            </div>
            <input type="text" className='userRecordUserInput' placeholder='닉네임을 입력해주세요' value={nickNameInputText} onChange={(event)=>{setNicknameInputText(event.target.value)}} />
            <button type='submit' className='userRecordUserSearchButton'>
              <img src="/img/icon/search_icon.png" alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="userRecordTopSection">
        <div className="contents_inner">
          <div className="userRepresentCharacterWrap">
            <img src={`https://img-api.neople.co.kr/cy/characters/${representCharacterId}?zoom=3`} alt="" />
          </div>
          <div className="userRecordUserNameWrap">
            <h5 className='userRecordUserName'>{props.userMatchData.nickname}</h5>
            <span className='userRecordUserMaxRp'>Max RP : {props.userMatchData.maxRatingPoint}점</span>
            <span className='userRecordGrade'>{props.userMatchData.grade} 급</span>
            <span className='userRecordClanName'>Clan : {props.userMatchData.clanName}</span>
          </div>

          <div className="userRecordDivideWrap">
            <img src="/img/icon/outline.png" alt="" />
          </div>

          <div className="userRecordTierWrap">
            <img className='userRecordTierImage' src={tierImageUrl} alt="" />
            <div className="userRecordTierTextWrap">
              <span className='userRecordTierText'>{props.userMatchData.tierName} - {props.userMatchData.ratingPoint} RP</span>
            </div>
          </div>

          <div className="userRecordRatingGameRecordWrap">
            <h5>공식 전적</h5>
            <div className="winLoseWrap">
              <span className='winLoseText'>{ratingWinCount}승 {ratingLoseCount}패 {ratingStopCount}중단</span>

              <span className='winingPercentText'>{ratingWiningPercent}%</span>
            </div>
          </div>
          <div className="userRecordNormalGameRecordWrap">
            <h5>일반 전적</h5>
            <div className="winLoseWrap">
              <span className='winLoseText'>{normalWinCount}승 {normalLoseCount}패 {normalStopCount}중단</span>

              <span className='winingPercentText'>{normalWiningPercent}%</span>
            </div>
          </div>
          
        </div>
      </div>
      <div className="userRecordMainSection">
        <div className="userRecordMainRankingWrap">
          <h5>실시간 랭킹</h5>
          <div className="userRecordMainRankingInner">
              {
                /* 공식 전적이 없거나 아직 불러오는 중이면 noRankDataUser 반환 */
                targetUserRankData == '' ? (<div className='noRankDataUser'>해당 유저는 공식전 전적이 없습니다.</div>) : 
                (
                  <div className="usersRankingContents">
                    
                    <div className={`userRanking ${(targetUserRankData[0].beforeRank - targetUserRankData[0].rank) > 0 ? "rankUp" : (targetUserRankData[0].beforeRank - targetUserRankData[0].rank) == 0 ? "rankSame" : "rankDown"}`}>{`${targetUserRankData[0].rank}위`}
                      <div className={`differenceOfRank ${(targetUserRankData[0].beforeRank - targetUserRankData[0].rank) > 0 ? "rankUp" : (targetUserRankData[0].beforeRank - targetUserRankData[0].rank) == 0 ? "rankSame" : "rankDown"}`}>
                        {(targetUserRankData[0].beforeRank - targetUserRankData[0].rank) == 0 ? "" : Math.abs(targetUserRankData[0].beforeRank - targetUserRankData[0].rank)}
                      </div>
                    </div>
                    <img className="userRepresentCharImgInRank" src={`https://img-api.neople.co.kr/cy/characters/${targetUserRankData[0].represent.characterId}?zoom=2`} alt=''></img>
                    <span className='userRankingName'>{targetUserRankData[0].nickname}</span>
                    <span className='userRankingGrade'>{targetUserRankData[0].grade}급</span>
                    <span className='userRankingRatePoint'>{targetUserRankData[0].ratingPoint} RP</span>
                  </div>
                )
              }
            <div className="userRecordRankingDivideDot"></div>
              {
                rankingUserRankData == '' ? null : 
                (
                  rankingUserRankData.map((item, index)=>(
                    <div key={index} className="usersRankingContents">
                      
                      <div className={`userRanking ${(item.beforeRank - item.rank) > 0 ? "rankUp" : (item.beforeRank - item.rank) == 0 ? "rankSame" : "rankDown"}`}>{`${item.rank}위`}
                        <div className={`differenceOfRank ${(item.beforeRank - item.rank) > 0 ? "rankUp" : (item.beforeRank - item.rank) == 0 ? "rankSame" : "rankDown"}`}>
                        {(item.beforeRank - item.rank) == 0 ? "" : Math.abs(item.beforeRank - item.rank)}
                        </div>
                      </div>
                      <img className="userRepresentCharImgInRank" src={`https://img-api.neople.co.kr/cy/characters/${item.represent.characterId}?zoom=2`} alt=''></img>
                      <span className='userRankingName'>{item.nickname}</span>
                      <span className='userRankingGrade'>{item.grade}급</span>
                      <span className='userRankingRatePoint'>{item.ratingPoint} RP</span>
                    </div>
                  ))
                )
              }
          </div>
        </div>
        <div className="userRecordMainRecordWrap">
          
          <h5 className='userRecordMainRecordWrapName'>{props.gameType == "rating" ? "공식전 " : "일반전 "}전투 기록
            <small className='recordNotice'>(전적은 최대 3개월, 100전의 기록만 열람 가능합니다.)</small>
          </h5>
          <div onClick={()=>{changeGameType()}} className={`gameTypeChangeButtonWrap ${props.gameType}`}>
            <div className="gameTypeButtonCircle"></div>
            <small className="gameTypeRatingText">공식전</small>
            <small className="gameTypeNormalText">일반전</small>
          </div>
          <small className='recordNotice2'>플레이어를 클릭하면 해당 플레이어 전적으로 이동합니다.</small>
          {
            props.userMatchData.matches && props.userMatchData.matches.rows.map((item, index)=>(
              /* index를 10으로 나눈 정수값이 morePage보다 크다면? null, 작다면? return하라 라는뜻,
              즉, moreRecordButton 버튼을 클릭하면 morePage가 1씩 늘어나니까 10개씩 더 보여주겠다. */
              /* parseInt 는 실수 -> 정수 형태변환 */
              parseInt(index/10) > morePage ? null : 
              <UserRecordComponent key={index} className={`UserRecordComponent ${parseInt(index/10)}page`} userPlayerId={props.userPlayerId} setUserPlayerId={(Id)=>{props.setUserPlayerId(Id)}} matchData={props.userMatchData} matchesRow={props.userMatchData.matches.rows[index]} gameType = {props.gameType}></UserRecordComponent>
            ))
          }
          {
            /* morePage가 10보다 크면 즉, 100개를 넘어가면 사라지고 아니면 나타나라 */
            morePage >= 10 ? null : <button className='moreRecordButton' onClick={()=>{seeMorePage()}}> 전적 결과 더보기 </button>
          }

        </div>
      </div>
    </div>
  )
}

export default UserRecord