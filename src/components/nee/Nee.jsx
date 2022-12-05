import React from 'react'
import { Link } from 'react-router-dom';
import "./nee.css"
import Logo from "../../Images/logo.png"


function Nee() {
    function MyFunction() {
        // const ref = useRef(null);

            // 👇️ use document.getElementById()
            const x = document.getElementById("myTopnav");
            // 👇️ (better) use a ref
            if (x.className === "topnav") {
                x.className += " responsive";
              } else {
                x.className = "topnav";
              }
     
      }
  return (
    <div className="topnav" id="myTopnav">
<div className='mad' >
 
    <Link to={'/'}>
    <img  className='logo' src={Logo} alt="" />
    </Link>
  
  <Link className='itemss' to={"/"}>Home</Link>
  <Link  className='itemss'  to={"/about"}>About</Link>
  <Link className='itemss'to={'/digit'}>Digital Marketing</Link>
<Link className='itemss' to={"/web"}>Web Design & Development</Link>
<Link className='itemss' to={"/ecom"}>E-Commerce Website</Link>
 <Link className='itemss' to={"/contactus"}>Contact us</Link>


 <a href=''
  className="icon" onClick={e=>{
    e.preventDefault()
    MyFunction();
  }}>
  <i className="fa fa-bars"></i>
  </a>
</div>

    </div>
  )
}

export default Nee
