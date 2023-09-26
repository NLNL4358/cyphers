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


/* props로 받는 데이터 className , userMatchData , matchesRow, gameType*/
const UserRecordComponent = (props) => {

  const [positionType, setPositionType] = useState(0);
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
  },[props.matchesRow])

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

  return (
    <div className={props.className}>
      <div className={`userRecordComponentContentsWrap ${props.matchesRow.playInfo.result}`} >
        <div className="recordContentLeftTextWrap">
          <h4>
            {
              props.matchesRow.playInfo.result === "stop" ? "중단" : 
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
              <body className='recordPlayedCharactersLevel'>{props.matchesRow.playInfo.level} Level</body>
              <p className='recordPlayedCharactersKillDeath'><bold>{props.matchesRow.playInfo.killCount}</bold> / <bold>{props.matchesRow.playInfo.deathCount}</bold> / <bold>{props.matchesRow.playInfo.assistCount}</bold></p>
              <body className='recordPlayedCharactersScore'>
                {
                  "KDA " + ((props.matchesRow.playInfo.killCount + props.matchesRow.playInfo.assistCount) / (props.matchesRow.playInfo.deathCount)).toFixed(1) 
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
      </div>
    </div>
  )
}

export default UserRecordComponent