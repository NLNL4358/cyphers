import React from 'react'

import {useState, useEffect} from 'react'
import position from '../CypherPageComponent/CharacterPosition';

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
  props.matchesRow.date  게임을 수행한 날자 2023-01-01 01:01
  props.matchesRow.map.name   게임에 이용된 맵
  props.matchesRow.position.name  게임에서 취한 포지션 (탱커, 서포터 등등..)
  props.matchesRow.position.attribute[0~3].id  게임에서 사용된 특성 4가지 ID값
  props.matchesRow.playInfo.characterId  게임에서 사용한 캐릭터 ID값
  props.matchesRow.playInfo.result   게임에서 이겼는지 졌는지  ( 'win' or 'lose')
  props.matchesRow.playInfo.level    게임에서 달성한 레벨
  props.matchesRow.playInfo.killCount   게임에서 Kill 카운트
  props.matchesRow.playInfo.deathCount   '' Death 카운트
  props.matchesRow.playInfo.assistCount  '' Assist 카운트


  userMatchData.matches.rows[0].matchId  게임의 matchId  --> 이거는 이제 매칭 상세정보로 이동가능
*/


/* props로 받는 데이터 className , userMatchData , matchesRow, gameType, lastComponent*/
const UserRecordComponent = (props) => {


                      /* useState */
  const [positionType, setPositionType] = useState(0);

  /* 매칭 디테일을 위한 매치ID로 API 호출을 위한 useState */
  const [matchDetailData, setMatchDetailData] = useState("");

  const [matchWinUser, setMatchWinUser] = useState([]); /* 승자 playerID * 5 */
  const [matchLoseUser, setMatchLoseUser] = useState([]); /* 패자 playerID * 5 */



                      /*  useEffect */
  /* matchesRow가 준비되면! useState를 바꿔줘라 */
  useEffect(()=>{
    switch(props.matchesRow.position.name){
      case "탱커" : 
        setPositionType(0);
        break;
      case "근거리딜러" :
        setPositionType(1);
        break;
      case "원거리딜러" : 
        setPositionType(2);
        break;
      case "서포터" : 
        setPositionType(3);
        break;
    }
    /* props가 제대로 들어왔다면 매치ID를 이용해 매치데이터 가져온다 */
    getMatchDetailData();
  },[props.matchesRow])


  /* MatchDetailData가 완성되었다면 승리한 유저, 패배한 유저 useState채우기 */
  useEffect(()=>{
    if(matchDetailData == ""){
      return;
    }
    whoIsWinTeam(matchDetailData.teams[0],matchDetailData.teams[1]);
    if( props.lastComponent )
    {
      /* 마지막녀석이였다면 refreshing True! */
      props.setRefreshing(true)
    }
  },[matchDetailData])


                            /* function */
  const whoIsWinTeam = (array0, array1) => {
    if(array0.result == 'lose'){
      /* 0이 패자 1이 승자 */
      setMatchLoseUser(array0.players);
      setMatchWinUser(array1.players);
    }
    else{
      /* 0이 승자 1이 패자 */
      setMatchLoseUser(array1.players);
      setMatchWinUser(array0.players);
    }
  }

  /* Netlify 호스팅을 위한 세팅 */
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const getMatchDetailData = async () => {
    const url = `${PROXY}/matches/${props.matchesRow.matchId}?&apikey=${process.env.REACT_APP_API_KEY}`

    try{
      const response = await fetch(url);
      if(!response.ok){
        switch(response.status){
          case 400:
            alert("필수 작성요소가 부족합니다. 파라미터 에러");
            break;
          case 401:
            alert("인증 오류");
            break;
          case 404:
            alert("유효하지 않는 플레이어 정보입니다.");
            break;
          case 500:
            alert("시스템 오류");
            break;
          case 503:
            alert("현재 사이퍼즈 점검 중 입니다.");
            break;
        }
        props.setRefreshing(false);
        throw new Error("Network response was not ok");
      }

      const detailData = await response.json();

      await setMatchDetailData(detailData);
    }
    catch(error){
      console.log("An error occurred:", error.message);
    }
  }

  const howManyParty = () =>{
    switch(props.matchesRow.playInfo.partyInfo.length+1){
      case 1:
        return "솔로";
      case 2:
        return "듀오";
      case 3:
        return "트리오";
      case 4:
        return "스쿼드";
      case 5:
        return "퀸텟";
    }
  }


  const changeUserPlayerId = (Id) => {
    props.setUserPlayerId(Id);
  }

  return (
    <div className={props.className}>
      <div className={`userRecordComponentContentsWrap ${props.matchesRow.playInfo.result}`} >
        <div className="recordContentLeftTextWrap">
          <h4>
            {
              props.matchesRow.playInfo.result === "win" ? "승리" : "패배"
            }
          </h4>
          <body>
            {
              props.gameType == "rating" ? `공식전 ${howManyParty()}` : `일반전 ${howManyParty()}`
            }
          </body>
          <div className="dotLine"></div>
          <small className='recordMapName'>{props.matchesRow.map.name}</small>
          <small className='recordTime'>{props.matchesRow.date.substr(0,10)}</small>
          <small className='recordTime'>{props.matchesRow.date.substr(11,5)}</small>
        </div>

        <div className="recordPlayInfoWrap">
          <div className="imageAndTextWrap">
            <img className='recordPlayedCharacterImage' src={`https://img-api.neople.co.kr/cy/characters/${props.matchesRow.playInfo.characterId}/?zoom=3`} alt="" />
            <div className="levelKillDeathTextWrap">
              <span className='recordPlayedCharactersLevel'>{props.matchesRow.playInfo.level} Level</span>
              <p className='recordPlayedCharactersKillDeath'><bold>{props.matchesRow.playInfo.killCount}</bold> / <bold>{props.matchesRow.playInfo.deathCount}</bold> / <bold>{props.matchesRow.playInfo.assistCount}</bold></p>
              <body className='recordPlayedCharactersScore'>
                {
                  props.matchesRow.playInfo.deathCount == 0 ? "KDA Perfect" :
                  "KDA " +  ((props.matchesRow.playInfo.killCount + props.matchesRow.playInfo.assistCount) / (props.matchesRow.playInfo.deathCount)).toFixed(1) 
                }
              </body>
            </div>
            <img className='recordPlayedPositionImage' src={`/img/icon/position_img_${positionType}.png`} alt="" />
          </div>
          {
            props.matchesRow.position == undefined ? null : (
              <div className="attributeWrap">
                <div className="eachAttributeWrap">
                  <small className='recordPlayedAttributeText'>{props.matchesRow.position.attribute[0].name}</small>                    
                  <img className='recordPlayedAttribute' src={`https://img-api.neople.co.kr/cy/position-attributes/${props.matchesRow.position.attribute[0].id}`} alt={`${
                    props.matchesRow.position.attribute[0].name
                  }`} />
                </div>
                <div className="eachAttributeWrap">
                  <small className='recordPlayedAttributeText'>{props.matchesRow.position.attribute[1].name}</small>                        
                  <img className='recordPlayedAttribute' src={`https://img-api.neople.co.kr/cy/position-attributes/${props.matchesRow.position.attribute[1].id}`} alt={`${
                    props.matchesRow.position.attribute[1].name
                  }`} />
                </div>
                <div className="eachAttributeWrap">
                  <small className='recordPlayedAttributeText'>{props.matchesRow.position.attribute[2].name}</small>                          
                  <img className='recordPlayedAttribute' src={`https://img-api.neople.co.kr/cy/position-attributes/${props.matchesRow.position.attribute[2].id}`} alt={`${
                    props.matchesRow.position.attribute[2].name
                  }`} />
                </div>
                <div className="eachAttributeWrap">
                  <small className='recordPlayedAttributeText'>{props.matchesRow.position.attribute[3].name}</small>                          
                  <img className='recordPlayedAttribute' src={`https://img-api.neople.co.kr/cy/position-attributes/${props.matchesRow.position.attribute[3].id}`} alt={`${
                    props.matchesRow.position.attribute[3].name
                  }`} />
                </div>
              </div>
            )
          }
        </div>

        <div className="recordPlayerScoreWrap">
          <span className='recordPlayerScore coinScore'>획득 코인 : {props.matchesRow.playInfo.getCoin}</span>
          <span className='recordPlayerScore attackPointScore'>가한 피해량 : {props.matchesRow.playInfo.attackPoint}</span>
          <span className='recordPlayerScore damagedPointScore'>받은 피해량 : {props.matchesRow.playInfo.damagePoint}</span>
          <span className='recordPlayerScore sightScore'>시야 점수 : {props.matchesRow.playInfo.sightPoint}</span>
        </div>

        <div className="recordMatchMembersWrap">
          <div className="recordMatchWinMemberWrap">
            {
              /* matchWinUser 가 있을때 동작해야겠지 && 를 이용하자 */
              matchWinUser && matchWinUser.map((itemP, indexP)=>(
                /* 승자의 Id 와 matchDetailData의 item.playerId가 일치할때 캐릭터 이미지, 닉네임을 보여주자 다르다면 null*/
                matchDetailData && matchDetailData.players.map((item,index)=>(
                    itemP != item.playerId ? null : 
                      <div key={index} className="recordMatchWinMember" onClick={()=>{changeUserPlayerId(item.playerId)}}>
                        <img className='recordMatchMembersCharacterImage' src={`https://img-api.neople.co.kr/cy/characters/${item.playInfo.characterId}?zoom=2`} alt="" />
                        <div className={`recordMatchMembersPositionImage ${item.position.name}`}></div>
                        <small className={ props.matchData.playerId == item.playerId ? `recordMatchMembersName targetPlayer` : 'recordMatchMembersName'}>{ item.nickname == null ? "알수없는 닉네임" : item.nickname}</small>
                      </div>
                  ))
              ))
            }
          </div>
          <div className="recordMatchLoseMemberWrap">
            {
              /* matchWinUser 가 있을때 동작해야겠지 && 를 이용하자 */
              matchLoseUser && matchLoseUser.map((itemP, indexP)=>(
                /* 승자의 Id 와 matchDetailData의 item.playerId가 일치할때 캐릭터 이미지, 닉네임을 보여주자 다르다면 null*/
                matchDetailData && matchDetailData.players.map((item,index)=>(
                    itemP != item.playerId ? null : 
                      <div key={index} className="recordMatchLoseMember" onClick={()=>{changeUserPlayerId(item.playerId)}}>
                        <img className='recordMatchMembersCharacterImage' src={`https://img-api.neople.co.kr/cy/characters/${item.playInfo.characterId}?zoom=2`} alt="" />
                        <div className={`recordMatchMembersPositionImage ${item.position.name}`}></div>
                        <small className={ props.matchData.playerId == item.playerId ? `recordMatchMembersName targetPlayer` : 'recordMatchMembersName'}>{ item.nickname == null ? "알수없는 닉네임" : item.nickname}</small>
                      </div>
                  ))
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRecordComponent