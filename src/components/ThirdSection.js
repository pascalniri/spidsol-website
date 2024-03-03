import React from 'react'
import '../styles/ThirdSection.css'
import { MdStarHalf } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import clean from "../images/clean.jpeg"









const ThirdSection = () => {
  return (
    <div className='third'>
       <div className='third-first'>
       <h1>Hire experts tailored to your needs</h1>
       <p>Our dedicated experts bring the right solutions to meet your unique needs,
        ensuring an experience that goes beyond expectations.
       </p>
       </div>

       <div className='third-second'>
         <div className='second-subcontainer'>
            <img src={clean} />
            <h4>House Cleaning</h4>
            <div className='rate'>
               <MdOutlineStarPurple500 />
               <MdOutlineStarPurple500 />
               <MdOutlineStarPurple500 />
               <MdOutlineStarPurple500 />
               <MdStarHalf />
            </div>   
         </div>
         <div className='second-subcontainer'>
            <img src={clean} />
            <h4>House Cleaning</h4>
            <div className='rate'>
               <MdOutlineStarPurple500 />
               <MdOutlineStarPurple500 />
               <MdOutlineStarPurple500 />
               <MdOutlineStarPurple500 />
               <MdStarHalf />
            </div>   
         </div>
      </div>    

       <div className='chat'>
         <button>Chat With Us</button>
         <BsWhatsapp />
       </div>
    </div>
  )
}

export default ThirdSection