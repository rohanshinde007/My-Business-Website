import React from 'react'
import'./intro.css'
import { Link } from 'react-router-dom'
function intro() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className='containersee'>
        
        <div id='lio'>
        <h1 className='h1'>We are Here to grow your Business with the help of Digital Marketing</h1>
        <div className='contact'>
          <h2 className='span'>Contact us for </h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Website Design</div>
              <div className="i-title-item">Development</div>
              <div className="i-title-item">Management Process</div>
            </div>


          </div>
        </div>
        <Link to={'/contactus'} className='btnx'>
        <button onClick={scrollToTop} className='btn' >Let’s talk</button>
        </Link>
        </div>
      </div>
  )
}

export default intro
