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
import StoryPage from './pages/StoryPage';
import CypherPage from './pages/CypherPage';
import UserRecord from './pages/UserRecord';
import UserRecordPreface from './pages/UserRecordPreface';
function App() {



  /* useState 사용될 것 :  
    1. API 검색을 위한 사용자 닉네임
    2. 공식전 or 일반전 매칭 타입
    3. 사용자 닉네임으로 받은 사용자 playerId;
    4. 사용자 닉네임검색 으로 받은 매칭정보
  */
  const [userNickName, setUserNickName] = useState(()=> JSON.parse(window.localStorage.getItem("userNickName")) || ""); /* 유저 닉네임 */

  const [gameType, setGameType] = useState(()=>JSON.parse(window.localStorage.getItem("gameType")) || "rating"); /* 매칭 타입 */
  
  const [userPlayerId, setUserPlayerId] = useState(()=>JSON.parse(window.localStorage.getItem("userPlayerId")) || ""); /* 플레이어 ID */

  const [userMatchData, setUserMatchData] = useState(""); /* 플레이어 매칭 데이터 */

  useEffect(()=>{
    if(userNickName == ""){
      return;
    }
    console.log("userNameChanged : ", userNickName);
    window.localStorage.setItem("userNickName", JSON.stringify(userNickName));
  },[userNickName]);


  useEffect(() => {
    /* AOS */
    AOS.init();

    /* API 키 */
    // console.log(process.env.REACT_APP_API_KEY);

  },[])

  useEffect(()=>{
    console.log("gameType : " , gameType);
    window.localStorage.setItem("gameType", JSON.stringify(gameType));
  },[gameType])
  
  useEffect(()=>{
    if(userPlayerId==""){
      return;
    }
    /* PlayerId 입력됨 */
    console.log("userPlayerId : ",userPlayerId);
    window.localStorage.setItem("userPlayerId", JSON.stringify(userPlayerId));
    // getMatch();
  },[userPlayerId]);

  useEffect(()=>{
    if(userMatchData == ""){
      return;
    }
    console.log(userMatchData);
  },[userMatchData]);

  
  /* Netlify 호스팅을 위한 세팅 */
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  return (
    <div className="App inner">
      <Header></Header>
      <Routes>
        {/* 메인 */}
        <Route path='/' element={<HomePage userNickName={userNickName} setUserNickName={setUserNickName} userPlayerId={userPlayerId} setUserPlayerId={setUserPlayerId} gameType={gameType} setGameType={setGameType}></HomePage>}>
        </Route>

        {/* 스토리 */}
        {/* 라우트 안에 라우트가 필요할떄 와일드 카드(*)를 주소 뒤에 붙혀준다 이후 무엇인가 더 온다는 뜻이다 */}
        <Route path='/StoryPage' element={<StoryPage></StoryPage>}></Route>

        {/* 사이퍼 */}
        <Route path='/CypherPage' element={<CypherPage></CypherPage>}></Route>


        {/* 전적검색 preface 페이지 */}
        <Route path='/UserRecordPreface' element={<UserRecordPreface gameType={gameType} setGameType={(type)=>{setGameType(type)}} userNickName={userNickName} setUserNickName={(name)=>{setUserNickName(name)}} userPlayerId={userPlayerId} setUserPlayerId={(Id)=>{setUserPlayerId(Id)}}></UserRecordPreface>}></Route>

        {/* 전적검색 */}
        <Route path='/UserRecord' element={<UserRecord userNickName={userNickName} setUserNickName={(name)=>{setUserNickName(name)}} gameType={gameType} setGameType={(Type)=>{setGameType(Type)}} userPlayerId={userPlayerId} setUserPlayerId={(Id)=>{setUserPlayerId(Id)}} userMatchData={userMatchData} setUserMatchData={(Data)=>{setUserMatchData(Data)}}></UserRecord>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
