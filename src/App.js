import logo from './logo.svg';
import './css/App.css';

import {useState, useEffect} from 'react';
import {Link, Routes, Route, BrowserRouter, useNavigate, useLocation} from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

/* env 파일을 사용하기위해서 해줘야하는 작업
1. npm install --save dotenv 
2. .env 파일을 루트폴더에 생성(src아님)
3. REACT_APP_이름 << 과같이 앞에 REACT_APP_ 을 붙히고 작성하기
4. process.env.REACT_APP_이름  으로 사용하면됨*/

/* Pages */
import Header from './pages/Header';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';


function App() {



  /* useState 사용될 것 :  
    1. API 검색을 위한 사용자 닉네임
    2. 공식전 or 일반전 매칭 타입
    3. 사용자 닉네임으로 받은 사용자 playerId;
    4. 사용자 닉네임검색 으로 받은 매칭정보
  */
  const [userNickName, setUserNickName] = useState(""); /* 유저 닉네임 */

  const [gameType, setGameType] = useState("rating"); /* 매칭 타입 */
  
  const [userPlayerId, setUserPlayerId] = useState(""); /* 플레이어 ID */

  const [userMatchData, setUserMatchData] = useState(""); /* 플레이어 매칭 데이터 */

  useEffect(()=>{
    if(userNickName == ""){
      return;
    }
    console.log("userNameChanged : ", userNickName);
  },[userNickName]);


  useEffect(() => {
    /* AOS */
    AOS.init();

    /* API 키 */
    console.log(process.env.REACT_APP_API_KEY);

  },[])

  
  useEffect(()=>{
    if(userPlayerId==""){
      return;
    }
    /* PlayerId 입력됨 */
    console.log("userPlayerId : ",userPlayerId);

    getMatch();
  },[userPlayerId])

  useEffect(()=>{
    if(userMatchData == ""){
      return;
    }
    console.log(userMatchData);
  })

  
  /* Netlify 호스팅을 위한 세팅 */
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';


  /* 매치 검색 */
  const getMatch = async () => {

    /* 시간 (<startDate> , <endDate>) 이 꼭 필요하다!! */
    let currentDay = new Date();
    let dateFormat1 = currentDay.getFullYear() + "-" + ( (currentDay.getMonth()) < 9 ? "0" + (currentDay.getMonth()+1) : (currentDay.getMonth()+1) ) + "-" + ( (currentDay.getDate()) < 9 ? "0" + (currentDay.getDate()) : (currentDay.getDate()) ) +" "+ (currentDay.getHours())+":"+(currentDay.getMinutes());
    let threeMonthAgo = new Date(currentDay.setMonth(currentDay.getMonth() - 2));
    let dateFormat2 = threeMonthAgo.getFullYear() + "-" +  ( (threeMonthAgo.getMonth()) < 9 ? "0" + (threeMonthAgo.getMonth()+1) : (threeMonthAgo.getMonth()+1) ) + "-" + ( (threeMonthAgo.getDate()) < 9 ? "0" + (threeMonthAgo.getDate()) : (threeMonthAgo.getDate()) ) +" "+ (currentDay.getHours())+":"+(currentDay.getMinutes()+1);


    /* Netlify 호스팅을 위한 세팅 */
    const url = `${PROXY}/players/${userPlayerId}/matches?gameTypeId=${gameType}&startDate=${dateFormat2}&endDate=${dateFormat1}&limit=100&apikey=${process.env.REACT_APP_API_KEY}`;

    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      let gameIndex = 0;  /* 공식이면 0 , 일반이면 1 */
      if(gameType == "normal"){
        gameIndex = 1;
      }
      /* data.records[0 or 1].winCount or LoseCount or stopCount */
      const MatchData = await data;
      setUserMatchData(MatchData);
    }

    catch(error){
      console.log("An error occurred:", error.message);
    }
  }


  return (
    <div className="App inner">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage userNickName={userNickName} setUserNickName={setUserNickName} userPlayerId={userPlayerId} setUserPlayerId={setUserPlayerId} gameType={gameType} setGameType={setGameType}></HomePage>}>
 
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
