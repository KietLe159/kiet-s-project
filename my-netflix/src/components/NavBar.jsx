import React, { useState } from 'react'
import "../scss/navBar.scss"
import {Search, Notifications, ArrowDropDown} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [show, setShow]= useState(false);
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll=()=>{
    
    setIsScroll(window.pageYOffset ===0? false  : true)
    return ()=>window.onscroll=null
  }

  return (
    <div className={`nav-container ${isScroll?`nav-container-scroll`: ``}`}>
        <Link to="/">
        <div className='nav-logo'>  
        <img src='https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/Netflix_logo.svg.png?alt=media&token=cad434be-6be7-4fe8-ab5c-31593e90ac7a' alt=""></img>
        </div>
        </Link>
      <div className='nav-router'>
        <Link to='/'>
          Home
        </Link>  

        <Link to='/series'>
          Series
        </Link>

        <Link to='/movies'>
          Movies
        </Link>

        <Link to='#'>
          New and Popular
        </Link>

        <Link to='#'>
          My List
        </Link>
        
      </div>
      <div className='nav-feature'>
        <div className='nav-search'>
          <Search className='icon' />
          <input></input>
        </div>

        <span>KID</span>

        <Notifications className='icon' />

        <div className='nav-profile'>
        
        <img src="https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a" alt="" />
        <div className='nav-setting'>
        <ArrowDropDown className='icon' onClick={()=>setShow(!show)}/>
        <ul style= {show? {display: "block"}: {display:"none"}}>
          <li>Setting</li>
          <li>Logout</li>
        </ul>

        </div>
        </div>
      </div>
      
    </div>
  )
}

export default NavBar