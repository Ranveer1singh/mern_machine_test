import React from 'react'
// import './index.css'

import Header from './component/Header'
import HeroSection from './component/HeroSection'
import Features from './component/Features'
import CoreFeature from './component/CoreFeature'
import GridBoxes from './component/GridBoxes'
import FreeTutorial from './component/FreeTutorial'
import Faq from './component/Faq'

const App = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Features/>
    <CoreFeature/>
    <FreeTutorial/>
    <Faq/>
    </>
  )
}

export default App