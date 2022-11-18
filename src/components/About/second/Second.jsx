import React from 'react'
import { Link } from 'react-router-dom'
import './second.css'

function Second() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  
  return (
    <div id='ma'>
        <div id='cnts'>
            <p id='res'>WE BELIEVE IN YOU</p>
            <p id='fes'>Our mission is simple - we want to support hardworking people who are trying to turn their business dreams into reality. We know that we can make a difference in the lives of local business owners by connecting them with potential customers through the power of the internet. </p>

            <Link to={'/contactus'}>
            <button onClick={scrollToTop}  id='bbb'>Transform Your Business</button>
            </Link>
        </div>
    </div>
  )
}

export default Second
