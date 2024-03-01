import React from 'react'
import "../styles/Footer.css"
import { MdArrowForwardIos } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
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
              <input type='email' placeholder='Email'/>

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
        <p>Join our newsletter to receive exclusive updates, special
            offers.
        </p>
        <p><MdEmail /> spidsolutions@gmail.com</p>
        <p><MdWifiCalling3 /> +250 784 673 524 <br/> +243 973 451 195</p>
        <hr></hr>
        <div className='platforms'>
            <p>Spidsolutions</p>
            <div>

            </div>
          </div>
            <FaLinkedin />
            <FaInstagram />
            <FaXTwitter />
          </div>
    </div>
  )
}

export default Footer