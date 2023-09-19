import StoryPage from 'react'

import {useState, useEffect} from 'react'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'

import StoryPageEclipse from './StoryPageEclipse';
import StoryPageSuperMoon from './StoryPageSuperMoon';
import StoryPageBlueMoon from './StoryPageBlueMoon';


const StoryPageMain = () => {

  const navigate = useNavigate();
  const [targetStory, setTargetStory] = useState(0); /* 0 : Eclipse , 1 : Sup-M  2: : Blu-M  */
  useEffect(()=>{
    switch (targetStory){
      case 0 :
        navigate("./");
        break
      case 1 :
        navigate("./StoryPageSuperMoon")
        break
      case 2 :
        navigate("./StoryPageBlueMoon")
        break
    }
  },[targetStory])

  const StoryName = [
    "Eclipse",
    "SuperMoon",
    "BlueMoon"
  ]

  const ChangeStoryPage = (index) =>{
    setTargetStory(index);
  }

  return (
    <div className='StoryPageMain inner'>
      <div className="StoryPageMainWrap">
        <div className="SelectTargetStoryWrap">
          {
            StoryName.map((item,index)=>(
              <button onClick={()=>{ChangeStoryPage(index)}} id={`${item + "Button"}`} className={`BlackOps ${item + "Button"}`}>
                {item}
              </button>
            ))
          }
        </div>
        <Routes>
          <Route path='./StoryPageEclipse' element={<StoryPageEclipse></StoryPageEclipse>}></Route>
          <Route path='./StoryPageSuperMoon' element={<StoryPageSuperMoon></StoryPageSuperMoon>}></Route>
          <Route path='./StoryPageBlueMoon' element={<StoryPageBlueMoon></StoryPageBlueMoon>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default StoryPageMain