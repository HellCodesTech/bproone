import React from 'react'
import Navbar from '../Components/Navbar'
import './css/Contact.css'
const Contact = () => {
  return (
    <div className='main'>
     <div className='nav'> <Navbar></Navbar></div>
      <div className='contact'>
          <dt>Your Name</dt>
          <dl><input type="text" required  /></dl>
          <dt>Email</dt>
          <dl><input type="Email" required/></dl>
          <dt>Subject</dt>
          <dl><input type="text" required /></dl>
          <dt>message</dt>
          <dl className='area1' ><input type="area"  style={{height:"100px"}} /></dl>
          <button className='btn btn-dark'>SUBMIT</button>
      </div>
      <hr />
    </div>
  )
}

export default Contact
