import React from 'react';
import '../styles/Header.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <div className='navbar'>
          <div className='logo'>
            <h1>LOGO</h1>
        </div>
        <div nav-contents>
           <ul>
             <li>Home</li>
             <li>
              <select style={{background:'rgba(9, 102, 57, 1)', color:'white', border:'none', outline:'none', padding:'0px 8px'}}>
                <option >Services</option>
                <option>House CLeaner</option>
                <option>Cooking Services</option>
                <option>24-Hours Live-In</option>
                <option>Security Services</option>
                <option>Driving Services</option>
                <option>Babysitting</option>
                <option>All-rounders</option>
                <option>Caretaker</option>
              </select>
             </li>
             <li>Pricing</li>
             <li>About Us</li>
             <li>Career</li>
             <li>Contact</li>
             <button> <IoMdAdd className='add'/> English <RiArrowDropDownLine /></button>
           </ul>
        </div>
    </div>
  )
}

export default Header