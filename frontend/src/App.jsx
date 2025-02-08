import React from 'react'
// import './index.css'

import Header from './component/Header'
import Features from './component/Features'
import CoreFeature from './component/CoreFeature'
import FreeTutorial from './component/FreeTutorial'
import Faq from './component/Faq'
import Hero from './component/Hero'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Features/>
    <CoreFeature/>
    <FreeTutorial/>
    <Faq/>
    </>
  )
}

export default App