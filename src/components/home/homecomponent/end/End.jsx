import React from 'react'
import './end.css'
import Img from '../../../../Images/logo.png'
import Facebook from '../../../../Images/facebook.jpg'
import Inst from '../../../../Images/inst.jpg'
import Twi from '../../../../Images/twiter.jpg'
import In from '../../../../Images/in.png'
import You from '../../../../Images/you.jpg'
import Email from '../../../../Images/email.png'
import { Link } from 'react-router-dom'


function End() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <>
      <div id='mains'>
      <div id='contsa'>
          <div id='co'>
            <img id='ii' src={Img} alt="" />
          </div>

   
          <div className='pps'>
            <h4 id='h4'>SERVICES</h4>

            <Link to={'/digit'} style={{ textDecoration: 'none' }}>
              <p onClick={scrollToTop} className='ter'>Digital Marketing</p>
            </Link>

            <Link to={"/web"} style={{ textDecoration: 'none' }}>
              <p onClick={scrollToTop} className='ter'>Web Design & Development</p>
            </Link>

            <Link to={"/ecom"} style={{ textDecoration: 'none' }}>
              <p onClick={scrollToTop} className='ter'>E-Commerce Website</p>
            </Link>

          </div>
          <div className='pps'>
            <h4 id='h4'>PAGES</h4>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
              <p onClick={scrollToTop} className='ter'>Home</p>
            </Link>
            <Link to={"/about"} style={{ textDecoration: 'none' }}>
              <p onClick={scrollToTop} className='ter'>About</p>
            </Link>
            <Link to={"/contactus"} style={{ textDecoration: 'none' }}>
              <p onClick={scrollToTop} className='ter'>Contact us</p>
            </Link>


          </div>
          <div className='pps'>
            <h4 id='h4'>OTHER</h4>
            <p className='ter'>Payments</p>
            <p className='ter'>Blogs</p>
            <p className='ter'>Other</p>

          </div>
        </div>



        <div id='e'>
          <div id='bo'>
           <a href="https://www.facebook.com/profile.php?id=100086675444440" target="_blank"><img className='aaa' src={Facebook} alt="" /></a>
            <a href="https://www.instagram.com/g_feature_/" target="_blank"><img className='aaa' src={Inst} alt="" /></a>
            <a href="https://twitter.com/MrBreak17539690" target="_blank"><img className='aaa' src={Twi} alt="" /></a>
           <a href="https://www.linkedin.com/in/rohan-shinde7/" target="_blank"> <img className='aaa' src={In} alt="" /></a>
           <a href="https://www.youtube.com/channel/UCow4rLExVeaBJXUktZLSegQ" target="_blank"><img className='aaa' src={You} alt="" /></a> 
           <a href="mailto:tech@gfeature.com" target="_blank"> <img className='aaa' src={Email} alt="" /></a>
          </div>
          <p id='coppy'>Copyright © 2022 GFeature | GFeature - Digital Marketing Company </p>

        </div>
      </div>
    </>
  )
}

export default End
