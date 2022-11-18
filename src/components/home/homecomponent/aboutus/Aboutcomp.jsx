import React from 'react'
import './aboutComp.css'
import Img from '../../../../Images/aa.jpg'
import { Link } from 'react-router-dom'

function Aboutcomp() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className='div'>
        <div className='containers'>
          <Link to={'/about'}>
         <img onClick={scrollToTop} className='imgss' src={Img} alt="" />
         </Link>
     </div>
        <div className='who'>
         <h3 id='head'>Who We Are</h3>
         <p id='sub'>We are enginears,  </p>
         <p id='m'>#Mission</p>
         <p id='conts'>Consistently deliver quality work <br /> Building impactful brands through excellence and efficiency.<br /> Connecting peoples Business to the world <br />Helping to grow all big or small busines</p>
        
         </div>
    </div>
  )
}

export default Aboutcomp
