import React from 'react'
import { Link } from 'react-router-dom'
import './pago1.css'

function Pago1() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div id='manas'>

      <div id='ecomH'>
        <h1 id='www'>E-COMMERCE WEBSITE DEVELOPMENT</h1>
        <Link to={'/contactus'} className='btnx'>
        <button onClick={scrollToTop} className='btn' >Let’s talk</button>
        </Link>
      </div>
   
    </div>
  )
}

export default Pago1
