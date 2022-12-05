import React from 'react'
import './our.css'
import Digital from '../../../../Images/digital.jpg'
import Web from '../../../../Images/web.jpg'
import Ecom from '../../../../Images/ecom.jpg'
import { Link } from 'react-router-dom'

function Our() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <div className='class1'>
        <div className='cont'>
        <h1 className='pp'  >Our Services</h1>
        </div>

        <div className='services'>

            <div className='cardA'>
           
                <h2 className='he'>Digital Marketing</h2>
                <img className='ima' src={Digital} alt="" />
                <p className='para'>We are here to the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes email, social media, web-based advertising, etc.  </p>
                <Link to={'/digit'}>
                <button onClick={scrollToTop} className='btns'>View More</button>
                </Link>

            </div>

            <div className='cardB'>
            <h2 className='he'>Web Design & Development</h2>
            <img className='ima2' src={Web} alt="" />
                <p className='para'>Website is essential for online businesses, and good looking website  can help you create a good impression on your customers. that's why we are here to create the best working and good looking Website. our company creates blog websites, portfolio websites, collage websites, etc.</p>
                <Link to={'/web'}>
                <button onClick={scrollToTop} className='btns'>View More</button>
                </Link>
               
            </div>

            <div className='cardC'>
            <h2 className='he'>E-Commerce Website</h2>
            <img className='ima' src={Ecom} alt="" />
            
                <p className='para'>The best E-Commerce Website plays a significant role in improving  your product sales, and our company always tries to give the best e-commerce website for big and small businesses</p>
                <Link to={'/ecom'}>
                <button onClick={scrollToTop} className='btns'>View More</button>
                </Link>
            </div>

        </div>
    </div>
   
  )
}

export default Our
