import React from 'react'

import {useState, useEffect} from 'react'
/* 캐릭터 Image Url
 https://img-api.neople.co.kr/cy/characters/<characterId>?zoom=3 
 위의 캐릭터 ID에 APi로 받아온 캐릭터들의 ID를 넣어주면서 배열을 만들어야함
 우선 API부터 받아오자 https://api.neople.co.kr/cy/characters?apikey=키*/

import CharacterPositionArrayExport from "./CharacterPosition";
import CharacterTypeArrayExport from "./CharacterType";

const CypherPageMain = () => {
  /* Netlify 호스팅을 위한 세팅 */
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  
  /* useState */
  const [cyphersImgUrl,setCyphersImgUrl] = useState([""]);

  


  /* All 이면 전체선택 중, 각 태그를 누르면 그 태그로 set, 두번누르면 All로 set */
  const [positionTag, setPositionTag] = useState("All"); /* 탱커, 근거리딜러, 원거리딜러, 서포터 */
  const [positionButton, setPositionButton] = useState("All");
  const [typeTag, setTypeTag] = useState("All"); /* 근거리, 원거리 */
  const [typeButton, setTypeButton] = useState("All");

  /* 포지션 태그 클릭 */
  const changePositionTag = (target) =>{
    if(positionTag === target){
      setPositionTag("All");
      setPositionButton("All");
      return;
    }
    setPositionTag(target);
    setPositionButton(target);
  }

  const changeTypeTag = (target)=>{
    if(typeTag === target){
      setTypeTag("All");
      setTypeButton("All");
      return
    }
    setTypeTag(target);
    setTypeButton(target);
  }




  /* 캐릭터 정보 API */
  const getCharactersImg = async () => {
    let url = `${PROXY}/characters?apikey=${process.env.REACT_APP_API_KEY}`;

    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Network response was not ok");
      };
      const data = await response.json();
      const ImgArray = await data.rows;
      setCyphersImgUrl(ImgArray);
    }
    catch(error){
      console.log("An error occurred:", error.message);
    }
  }




  /* html */
  const replaceStringCharacterPosition = () =>{
    for(let i = 0; i < CharacterPositionArrayExport.length ; i++){
      switch (CharacterPositionArrayExport[i]){
        case '0' :
          CharacterPositionArrayExport[i] = '탱커';
          break;
        case '1' :
          CharacterPositionArrayExport[i] = '근거리딜러';
          break;
        case '2' :
          CharacterPositionArrayExport[i] = '원거리딜러';
          break;
        case '3' :
          CharacterPositionArrayExport[i] = '서포터';
          break;
      }
      switch (CharacterTypeArrayExport[i]){
        case '0' : 
          CharacterTypeArrayExport[i] = '근거리';
          break;
        case '1' :
          CharacterTypeArrayExport[i] = '원거리';
          break;
      }
    }
  }
  
  /* useEffect */
  useEffect(()=>{
    getCharactersImg();
    replaceStringCharacterPosition();
  },[])

  useEffect(()=>{
    if(cyphersImgUrl === [""]){
      return;
    }
    console.log(cyphersImgUrl);

  },[cyphersImgUrl])
  
  
  return (
    <div className='CypherPageMain inner'>
      <div className="CyphersCharacterCategoryWrap contents_inner">
        <ul>
          <li className='position'>
            <p className='CyphersCharacterCategoryName'>
              역할
            </p>
            <div className="CyphersCharacterCategoryTextWrap">
              <button className={`${positionButton}`} onClick={()=>{changePositionTag("탱커")}}>탱커</button>
              <button className={`${positionButton}`} onClick={()=>{changePositionTag("근거리딜러")}}>근거리 딜러</button>
              <button className={`${positionButton}`} onClick={()=>{changePositionTag("원거리딜러")}}>원거리 딜러</button>
              <button className={`${positionButton}`} onClick={()=>{changePositionTag("서포터")}}>서포터</button>
            </div>
          </li>
          <li className='attackType'>
            <p className='CyphersCharacterCategoryName'>
              공격타입
            </p>
            <div className="CyphersCharacterCategoryTextWrap">
              <button className={`${typeButton}`} onClick={()=>{changeTypeTag("근거리")}}>근거리</button>
              <button className={`${typeButton}`} onClick={()=>{changeTypeTag("원거리")}}>원거리</button>
            </div>
          </li>
          <li className='attackTarget'>
            <p className='CyphersCharacterCategoryName'>
              공격특성
            </p>
            <div className="CyphersCharacterCategoryTextWrap">
              <button>대인</button>
              <button>공성</button>
            </div>
          </li>
          <li className='difficulty'>
            <p className='CyphersCharacterCategoryName'>
              조작 난이도
            </p>
            <div className="CyphersCharacterCategoryTextWrap">
              <button>쉬움</button>
              <button>보통</button>
              <button>어려움</button>
            </div>
          </li>
          <li className='ability'>
            <p className='CyphersCharacterCategoryName'>
              특수 능력
            </p>
            <div className="CyphersCharacterCategoryTextWrap">
              <button>기동성</button>
              <button>방어</button>
              <button>무력화</button>
              <button>은신</button>
              <button>은신감지</button>
              <button>슈퍼아머</button>
              <button>회복</button>
              <button>강화</button>
              <button>방어무시</button>
              <button>약화</button>
              <button>맵스캐닝</button>
            </div>
          </li>
          <li className='belong'>
            <p className='CyphersCharacterCategoryName'>
              소속
            </p>
            <div className="CyphersCharacterCategoryTextWrap">
              <button>헬리오스</button>
              <button>지하연합</button>
              <button>그랑플람 재단</button>
              <button>어둠의 능력자</button>
              <button>더 호라이즌</button>
              <button>안타리우스</button>
              <button>기타세력</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="CyphersCharacterWrap contents_inner">
        {
          cyphersImgUrl.map((item, index)=>{
            if((positionTag === 'All' || CharacterPositionArrayExport[index] === positionTag) &&
            (typeTag === 'All' || CharacterTypeArrayExport[index] === typeTag))
            {
              return(
                <div key={index} className={`CyphersCharacterRectWrap ${CharacterTypeArrayExport[index]} ${CharacterPositionArrayExport[index]} ${item.characterName}`}>
                <div className="CyphersCharacterImageWrap">
                  <img className="CyphersCharacterImage" src={`https://img-api.neople.co.kr/cy/characters/${item.characterId}?zoom=3`} alt="" />
                </div>
                <div className="CyphersCharacterTextWrap">
                  <small className='CyphersCharacterPosition'>{`${CharacterPositionArrayExport[index]}`}</small>
                  <span className='CyphersCharacterName'>{item.characterName}</span>
                </div> 
              </div>
              )
            }
          })
        }
      </div>
      
    </div>
  )
}

export default CypherPageMain