import React from 'react'
import "../styles/Footer.css"
import { MdArrowForwardIos } from "react-icons/md";
import gmail from "../images/gmail.png"
import call from "../images/call.jpg"
import linkedin from "../images/linkedin.jpg"
import x from "../images/x.avif"
import ig from "../images/ig.jpeg"
const Footer = () => {
  return (
    <div className='all'>
                    <div className='footer'>
      <div className='footer-col-one'>
         <h1>LOGO</h1>
         <p>
         Join our newsletter to receive exclusive updates
         , special offers, and expert tips directly to your inbox.
          Be the first to
          know about new services and exciting promotions.
         </p>
         <div className='email-button'>
              <input type='email' placeholder='Email'/><input type='button' value="->" />

         </div>

      </div>
     
      <div className='footer-col-two'>
         <h4>Quick Links</h4>
         <p><MdArrowForwardIos /> Home</p>
         <p><MdArrowForwardIos /> About Us</p>
         <p><MdArrowForwardIos /> Pricing</p>
         <p><MdArrowForwardIos /> Carrier</p>
      </div>
      <div className='footer-col-three'>
         <h4>Services</h4>
        <p><MdArrowForwardIos /> House Cleanin</p>
        <p><MdArrowForwardIos /> Cooking Services</p>
        <p><MdArrowForwardIos /> 24 Hours live-in</p>
        <p><MdArrowForwardIos /> Security Services</p>
        <p><MdArrowForwardIos /> Driving Services</p>
        <p><MdArrowForwardIos /> Baby Sitting</p>
        <p><MdArrowForwardIos /> All-Rounders</p>
      </div>

     
      <div className='footer-col-four'>
        <h4>Contact Info</h4>
        <div className='contact'>
           <p>Join our newsletter to receive exclusive updates, special
            offers.
            </p>
            <p><img src={gmail}/><span>spidsolutions@gmail.com</span></p>
            <p><img src={call} /><span>+250 784 673 524<br/>+243 973 451 195</span></p>
        </div>
        <hr className='line'/>
        <div className='platforms'>
            <p>Spidsolutions</p>
            <div className='plat-icons'>
              <img src={linkedin} />
              <img src={ig} />
              <img src={x} />
            </div>
          </div>
          </div>
    </div>

    <div className='footer-end'>
       <p>© Spidsolution 2024 All - right Reserved</p>
    </div>
  </div>
  )
}

export default Footer