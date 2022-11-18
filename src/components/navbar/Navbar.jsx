import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../Images/logo.png'





function Navbar() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  return (
   <>
<div className='container'>

    <div id='llss'>
    <Link to={'/'}>
    <img  className='logo' src={Logo} alt="" />
    </Link>
    </div>
<div id='listuuu'>
   
    <li className='listitem'>
        <Link className='items' to={"/"}>Home</Link>
    </li>
    <li className='listitem'>
        <Link  className='items'  to={"/about"}>About</Link>
    </li>
    <li className='listitem'>
        <Link className='items'to={'/digit'}>Digital Marketing</Link>
    </li>
    <li className='listitem'>
        <Link className='items' to={"/web"}>Web Design & Development</Link>
    </li>
    <li className='listitem'>
        <Link className='items' to={"/ecom"}>E-Commerce Website</Link>
    </li>
    <li className='listitem'>
        <Link className='items' to={"/contactus"}>Contact us</Link>
    </li>
    </div>
</div>
</>
  )
}

export default Navbar
