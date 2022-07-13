import React, { useContext } from 'react'
import { ThemeContext } from '../darkTheme/themeContextProvider';
import "../scss/navBar.scss"
import {Search, Language, DarkModeOutlined, FullscreenExit, NotificationsNone, ChatBubbleOutline, List } from '@mui/icons-material';

const NavBar = () => {
  const context= useContext(ThemeContext)


  return (
    <div className='navbar-container'>
      <div className="navbar-search">
        <input type="text" placeholder='Search...'/>
        <Search className='navbar-icon'/>
      </div>
      
      <div className="navbar-option">
        <div className="navbar-item">
          <Language className='navbar-icon '/>
          <span>English</span> 
        </div>
        
        <div className="navbar-item" onClick={()=>context.handleOnOff(context.state?"":"On")}> 

          <DarkModeOutlined className='navbar-icon'/>
  
        </div>
        
        <div className="navbar-item">
          <FullscreenExit className='navbar-icon' />
        </div>

        <div className="navbar-item">
          <NotificationsNone className='navbar-icon' />
          <span className="counter">1</span>
        </div>

        <div className="navbar-item">
          <ChatBubbleOutline className='navbar-icon' />
          <span className="counter">1</span>
        </div>

        <div className="navbar-item">
          <List className='navbar-icon' />
        </div>

        <div className="navbar-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a" alt="" className="navbar-avatar" />
        </div>

      </div>
    </div>
  )
}

export default NavBar