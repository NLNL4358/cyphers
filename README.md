![header](https://capsule-render.vercel.app/api?type=wave&color=0:F208FE,50:8F5FF1,100:1BC4E2&height=300&section=header&text=✨사이퍼즈&nbsp;웹&nbsp;페이지&nbsp;리뉴얼✨&fontColor=ffffff&fontSize=55)

<br>

## 목차
1. ///

<br>

## 프로젝트 정보
### :pushpin: 사이퍼즈 웹 페이지 리뉴얼 개인 프로젝트

### :pushpin: 개발 기간 - 2023.09.05 ~ 2023.10.04

### :pushpin: 개발 목적
- React를 이용하여 React 스킬 증진
- 네오플-사이퍼즈 에서 제공하는 API를 이용해 웹 페이지에서 활용하여 API 사용 경험
- 기획부터 퍼블리싱까지 전반적인 프로젝트 과정에 참여하여 본인의 특기분야뿐만 아닌 다양한 영역의 능력치 향상

<br>

<br>

## 개발환경

####   :star: 개발 환경
<img src="https://img.shields.io/badge/Windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>

####   :star: 개발에 사용된 프로그램
<img src="https://img.shields.io/badge/VS_code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/> <img src="https://img.shields.io/badge/Adobe_Illustrator-FF9A00?style=flat-square&logo=adobeillustrator&logoColor=white"/> <img src="https://img.shields.io/badge/Adobe_photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white"/>

####   :star: 개발 언어
<img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/jquery-0769AD?style=flat-square&logo=jquery&logoColor=white"/> <img src="https://img.shields.io/badge/swiper-6332F6?style=flat-square&logo=swiper&logoColor=white"/> 
<br>

####   :star: 사용 API
<img src="https://developers.neople.co.kr/img/logo.png" />


<br>

## 프로젝트 소개 
:pencil2: 사이퍼즈 웹 페이지 메인에 방문한 사용자에게 다양한 콘텐츠와 API활용으로 전적검색을 가능케하여 기능적인 측면을 강화함

<br>

## 사용 npm install
 #### 1. npm install react-router-dom
 #### 2. npm install dotenv
 #### 3. npm install swiper
 #### 4. npm install aos --save

///////////////////////////////////////////////////////

<br>

## 페이지 구성 및 주요기능

### :small_blue_diamond: 메인페이지 [Link](https://cyphers.netlify.app/#/)
![cyphersPagePortfolio6](https://github.com/NLNL4358/cyphers/assets/100134222/1477b804-ada7-477b-a316-a72a297e27cf)

#### Header
- Navigation 기능 서브페이지로 이동, 게임시작, 로그인 등..
- ### 현재 구현된 서브페이지 :
     ##### :small_blue_diamond:게임정보 > 세계관
     ##### :small_blue_diamond:게임정보 > 캐릭터 이클립스
     ##### :small_blue_diamond:랭킹 > 전적검색
  
#### Main
- Background video, Logo, Gamestart Button을 배치
  
#### News Section
- 사이퍼즈 게임의 새소식, 공지사항 등 유저에게 개발에 관한 내용 전달
  
#### AcePick Section 
- 유저들의 팬아트, 팁 글 등의 게시글 중 선정된 게시글을 메인 홈페이지에서 전달
  
#### Banner Section
- 사이퍼즈 게임의 새로운 이벤트를 배너 슬라이드 형식으로 전달
  
#### ApiSearchSection 
- API를 이용하여 유저의 전적을 검색할 수 있는 영역
  - ##### :small_blue_diamond:전적 검색시 서브페이지 ( userRecord ) 로 이동
    
#### StorySection , CypherSection , MapSection 
- 사이퍼즈 게임 내 스토리, 사이퍼, 맵의 가이드를 볼 수 있는 서브페이지로 유도하는 영역
  - ##### :small_blue_diamond:스토리, 사이퍼 영역의 버튼 클릭시 해당 서브페이지로 이동
  
#### Footer



### :small_blue_diamond: 서브페이지 - 스토리 [Link](https://cyphers.netlify.app/#/StoryPage)

- 헤더에서 게임정보 > 세계관 클릭하거나 메인페이지에서 StorySection 의 버튼을 클릭하면 서브페이지로 이동한다.
  
![Sub_story](https://github.com/NLNL4358/cyphers/assets/100134222/399a1de3-7687-4bdd-8adf-41aff6e28375)

#

### :small_blue_diamond: 서브페이지 - 캐릭터 [Link](https://cyphers.netlify.app/#/CypherPage)

- 헤더에서 게임정보 > 캐릭터 이클립스 클릭하거나 메인페이지에서 CypherSection 의 버튼을 클릭하면 서브페이지로 이동한다.
  
![Characters](https://github.com/NLNL4358/cyphers/assets/100134222/8c1eca94-da07-48fc-a146-92af6a748832)

#

### :small_blue_diamond: 서브페이지 - 전적검색 [Link](https://cyphers.netlify.app/#/UserRecordPreface)

- 헤더에서 랭킹 > 전적검색 클릭하여 이동한 recordPreface 페이지에서 닉네임을 입력하거나 OR 메인페이지에서 ApiSearchSection 의 검색란에 닉네임을 입력하면 이동한다.

![Record](https://github.com/NLNL4358/cyphers/assets/100134222/e25cbc84-9bfd-45ff-b92d-ea292590653c)



<br>

## 호스팅

### :star2: [메인페이지](https://cyphers.netlify.app/)
### :star2: [서브페이지1 - 전적검색](https://cyphers.netlify.app/#/UserRecordPreface)   /* 추천 검색 닉네임 : ㅡFURYㅡ */
### :star2: [서브페이지2 - 세계관](https://cyphers.netlify.app/#/StoryPage)
### :star2: [서브페이지3 - 캐릭터 이클립스](https://cyphers.netlify.app/#/CypherPage)

<br>

## 산출물

#### :link: [브레인스토밍](https://www.figma.com/file/Sn3xtNjgFEBLlpeB8TJUoN/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=whiteboard&node-id=0%3A1&t=gVrklMYp4dW1qEQB-1)
#### :link: [와이어프레임 및 디자인](https://www.figma.com/file/X2lSnKgFwbsoKuWxMxhs6l/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Cyphers?type=design&node-id=0%3A1&mode=design&t=Rs7rdKxnK3u4y9tR-1)
#### :link: [기획서](https://docs.google.com/presentation/d/1NIuKMv-zXthLogBuQ2JNbT5uoJYyAxmbpQzbmfssrIA/edit?usp=sharing)
#### :link: [깃허브](https://github.com/NLNL4358/cyphers)

<br>

![footer](https://capsule-render.vercel.app/api?type=wave&color=0:F208FE,50:8F5FF1,100:1BC4E2&height=200&section=footer&fontSize=70)
