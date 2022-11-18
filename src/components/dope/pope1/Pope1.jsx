import React from 'react'
import { Link } from 'react-router-dom'
import './pope1.css'

function Pope1() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <div id='mana'>
    <div id='upsi'>
        <div id='spec'>
        <h1 id='oiur'>Are you ready to grow using Digital Marketing</h1>
        </div>
        <Link to={'/contactus'}>
        <button onClick={scrollToTop} id='lets'>Let's talk</button>
        </Link>
    </div>
  </div>
  )
}

export default Pope1
