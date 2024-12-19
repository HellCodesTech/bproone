

import React from 'react'
import Navbar from '../Components/Navbar'
import './css/Home.css'
import { Link } from 'react-router-dom'
import blogo from '../assets/balajilogo.jpeg'
import Footer from '../Components/Footer/Footer'
import pdfone from '../assets/ma.pdf'
const Home = () => {
  
  return (
    <div className='main'>
      <div className='nav'> <Navbar></Navbar></div>
      <div className='logo-img'>
        <div className='imglist'>
        <img src={blogo} alt="" />
        </div>
        {/**<h4>Hi,Hello</h4> */}
      </div>
      <div className='details'>
          <p>Hello,I'm</p>
          <h1> <b>Gaddam</b> Balaji</h1>
          <h3>Frontend Developer</h3>
          <div className='btn-100'>
               <a href={blogo} className='btn btn-dark' download="ma" >Download CV</a>
               <Link to={`/contact`} className='btn btn-outline-dark'>Contact me</Link>
          </div>
          <div className='social-media'>
             <a href="https://wa.me/qr/J5ORIARYKFT3J1" className='bi bi-whatsapp text-success'></a>
             <a href="https://www.instagram.com/balaji_raju22_/profilecard/?igsh=cG1mbGp0aXg0bjAx" className='bi bi-instagram instagram'></a>
             <a href="" className='bi bi-github text-dark'></a>
             <a href="" className='bi bi-facebook'></a>
          </div>
          <hr />
      </div>
       <div className='Footer-main'>
        <Footer></Footer>
       </div>
    </div>
  )
}

export default Home
