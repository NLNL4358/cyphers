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

const HomePage = () => {
  return (
    <div className='Homepage'>
      <Main></Main>
      <BannerSection></BannerSection>
      <NewsSection></NewsSection>
      <AcePickSection></AcePickSection>
      <ApiSearchSection></ApiSearchSection>
      <StorySection></StorySection>
      <CypherSection></CypherSection>
      <MapSection></MapSection>
    </div>
  )
}

export default HomePage