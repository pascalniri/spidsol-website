import React, { Component } from 'react';
import '../styles/Header.css'
import { IoMdAdd } from "react-icons/io";

class Header extends Component{
  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked:
    !this.state.clicked})
  }
   render(){
    return (
      <>
        <nav> 
        <div id='mobile' 
              onClick=
              {this.handleClick}
            >
               <i id='bar'
                  className=
                  {this.state.clicked ? "fas fa-times": "fas fa-bars"}
               ></i>
            </div>   
          <a href='#' className='logo'>LOGO</a>
          <div>
            <ul id='navbar' className={this.state.clicked ? '#navbar active': '#navbar'}>
              <li><a href='#'>Home</a></li>
              <li>
                  <select style={{background:'rgba(9, 102, 57, 1)', border:'none', outline:'none', color:'white', fontWeight:'bold', fontSize:'15px', margin:'0 -2px', cursor:'pointer'}}>
                    <option><a href='#'>Services</a></option>
                    <option><a href='#'>House Cleaner</a></option>
                    <option><a href='#'>Cooking Services</a></option>
                    <option><a href='#'>24-Hour Live-in</a></option>
                    <option><a href='#'>Security Services</a></option>
                    <option><a href='#'>Driving Services</a></option>
                    <option><a href='#'>Babysittin</a></option>
                    <option><a href='#'>All-rounders</a></option>
                    <option><a href='#'>Caretaker</a></option>
                  </select>
                </li>
                <li><a href='#'>Pricing</a></li>

              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Career</a></li>
              <li><a href='#'>Contact</a></li>

              <li id='language-two'>
              <div  style={{background:'white', padding:'7px 15px', borderRadius:'5px'}}>
                 <IoMdAdd style={{color:'red', fontSize:'20px'}}/>
                 <select
                   value={this.state.language}
                   onChange={this.handleLanguageChange}
                   style={{border:'none', outline:'none'}}
                 >
                    <option value="English">English</option>
                    <option value="French">French</option>
                 </select>
              </div>
              </li>

            </ul>
          </div>
           
              <li id='language-one'>
              <div id="language-dropdown" >
                 <IoMdAdd style={{color:'red', fontSize:'20px'}}/>
                 <select
                   value={this.state.language}
                   onChange={this.handleLanguageChange}
                   style={{border:'none', outline:'none'}}
                 >
                    <option value="English">English</option>
                    <option value="French">French</option>
                 </select>
              </div>
              </li>
  
        
        </nav>
                  
      </>
    )
   }
}

export default Header