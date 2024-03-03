import React from 'react'
import "../styles/FifthSection.css"
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const FifthSection = () => {
  return (
    <div className='fifth'>
      <div className='fifth-first'>
         <h1>Frequently Asked Questions (FAQs)</h1>
      </div>
      <div className='fifth-second'>

          <div className='faqs'>
            <p>How can I hire a housemaid/babysitter/cook from SPid Solution?</p>
            <FaRegArrowAltCircleDown />
          </div>

          <div className='faqs'>
            <p>What if I`m not satisfied with the services? </p>
            <FaRegArrowAltCircleDown />
          </div>
          
          <div className='faqs'>
            <p>Are your Agents Reliable?</p>
            <FaRegArrowAltCircleDown />
          </div>
      </div>
    </div>
  )
}

export default FifthSection