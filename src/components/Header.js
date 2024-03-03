import React, { Component } from 'react';
import '../styles/Header.css'



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
            <select className='language-one' style={{padding:'5px 10px', border:'none', outline:'none', borderRadius:'5px'}}>          
                   <option>English</option>
                   <option>French</option>
            </select>         
          <a href='#'>LOGO</a>
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
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Content</a></li>
              <li id='language-two'>
                <select  style={{padding:'10px 15px', border:'none', outline:'none', borderRadius:'5px'}}>          
                   <option>English</option>
                   <option>French</option>
                </select>
              </li>
            </ul>
          </div>
              
            <div id='mobile' 
              onClick=
              {this.handleClick}
            >
               <i id='bar'
                  className=
                  {this.state.clicked ? "fas fa-times": "fas fa-bars"}
               ></i>
            </div>
  
        
        </nav>
                  
      </>
    )
   }
}

export default Header