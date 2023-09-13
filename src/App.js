import logo from './logo.svg';
import './css/App.css';

import {useState, useEffect} from 'react';
import {Link, Routes, Route, BrowserRouter, useNavigate, useLocation} from 'react-router-dom';

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
  */
  const [userNickName, setUserNickName] = useState("");


  /* API 불러오기 */

  /* API 키 */
  // const myApiKey = 


  useEffect(()=>{
    console.log(process.env.REACT_APP_API_KEY);
  },[]);






  return (
    <div className="App inner">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}>
 
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
