import React from 'react'

/* components */
import Main from '../components/Main'
import BannerSection from '../components/BannerSection'
import NewsSection from '../components/NewsSection'
import AcePickSection from '../components/AcePickSection'
import ApiSearchSection from '../components/ApiSearchSection'
import StorySection from '../components/StorySection'
import CypherSection from '../components/CypherSection'
import MapSection from '../components/MapSection'


/* props로 전달받는 것 userNickName 유저네임, setUserNickName Set유저네임 */
const HomePage = (props) => {
  return (
    <div className='Homepage'>
      <Main></Main>
      <NewsSection></NewsSection>
      <AcePickSection></AcePickSection>
      <BannerSection></BannerSection>
      <ApiSearchSection userNickName={props.userNickName} setUserNickName={(target)=>{props.setUserNickName(target)}} userPlayerId={props.userPlayerId} setUserPlayerId={(Id)=>{props.setUserPlayerId(Id)}}  gameType={props.gameType} setGameType={(Type)=>{props.setGameType(Type)}}></ApiSearchSection>
      <StorySection></StorySection>
      <CypherSection></CypherSection>
      <MapSection></MapSection>
    </div>
  )
}

export default HomePage