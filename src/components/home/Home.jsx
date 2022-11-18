import React from 'react'
import Intro from '../home/homecomponent/intro'
import Aboutcomp from './homecomponent/aboutus/Aboutcomp'
import End from './homecomponent/end/End'
import Our from './homecomponent/ourService/Our'
import WorkUs from './homecomponent/work/WorkUs'



function Home() {
  return (
    <>
   <Intro/>
   <Aboutcomp/>
   <Our/>
   <WorkUs/>
   <End/>
    </>
  )
}

export default Home
