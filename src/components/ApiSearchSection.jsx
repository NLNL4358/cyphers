import React from 'react'

import {useState, useEffect} from 'react';

/* API Key 는 환경변수를 사용 process.env.REACT_APP_API_KEY */


const ApiSearchSection = (props) => {

  const userNameChange = (text) => {
    props.setUserNickName(text);
  }

  console.log("userName : ", props.userNickName );
  useEffect(()=>{
  },[])
  useEffect(()=>{
    console.log("userName : ", props.userNickName );
  },[props.userNickName])

  return (
    <div onClick={()=>{userNameChange("장발장")}}>ApiSearchSection</div>
  )
}

export default ApiSearchSection