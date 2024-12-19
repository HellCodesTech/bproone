import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar/Navbar.css'
const Navbar = () => {
  const [click,setclick]=useState(false)
  const handleclick=()=>setclick(!click)

  const [color ,setcolor]=useState(false)
  const changecolor=()=>{
   if(window.scrollY >= 50){
          setcolor(true)
   }else{
      setcolor(false)
   }
  }
  window.addEventListener("scroll",changecolor)
  return (
    <div className={color ?"nav-menu nav-menu-bg":"nav-menu"}>
       <div className='logo'>
          <h2>Gaddam <b>Balaji</b></h2>
       </div>
       <div className='list-menu'>
          <ul className={click?"nav-menu ul active":"nav-menu"}>
          
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/about`}>About</Link></li>
            <li><Link to={`/contact`}>Contact</Link></li>
            <li><Link to={`/project`}>Projects</Link></li>
           
          </ul>
          
       </div>
       <hr />
       <div className='btn-1' onClick={handleclick}>
          {
            click ?( <span className='bi bi-x close close1' onClick={handleclick}></span>)
            :(<span className='bi bi-list fs-1 m-3 btn-list' onClick={handleclick}></span>
           )
          }
          
       </div>
    </div>
  )
}

export default Navbar
