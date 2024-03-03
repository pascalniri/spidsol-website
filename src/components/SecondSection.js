import React from 'react';
import '../styles/SecondSection.css';
import intro from "../images/intro.jpg";
const SecondSection = () => {


   return (
      <div className='first'>
         <div className='intro'>
            <h1 >Welcome to Spid Solutions</h1>
            <h1 style={{ color: 'rgba(244, 148, 6, 1)'}}>Your Trusted Household</h1>
            <h1>Services</h1>

            <p>
               We understand the Importance of a well-managed home, hotel, or business. Experience convience like never
               before with our comprehensive domestic services. Your satisfaction is our priority.
            </p>

            <div className='intro-btn'>
               <button>Book Now</button>
            </div>
         </div>
         <div className='intro-img'>
            <img src={intro} />
         </div>
      </div>
   )
}

export default SecondSection