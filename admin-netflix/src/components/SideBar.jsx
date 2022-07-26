import React, { useContext } from 'react'
import "../scss/sideBar.scss"
import {Dashboard ,Person, PlayCircleFilledWhite, CreditCard, LocalShipping, InsertChart, HealthAndSafety, Notifications, Psychology, Settings, AccountCircle, Logout} from '@mui/icons-material';
import {Link} from "react-router-dom"
import {ThemeContext} from "../darkTheme/themeContextProvider"

const SideBar = () => {
    const context= useContext(ThemeContext)

  return (
    <div className='sidebar-container'>
        <div className='sidebar-top'>
            <Link to="/">
            <span className='sidebar-logo'> Netflix Admin</span>
            </Link>
        </div>

        <div className='sidebar-middle'>
            <ul>
                <h5>MAIN</h5>

                <Link to="/">
                <li>
                    <Dashboard className="side-bar-icon" />
                    <span>Dashboard</span>
                </li>
                </Link>
                
                <h5>LISTS</h5>

                <Link to="/user">
                <li>
                    <Person className="side-bar-icon" />
                    <span>Users</span> 
                </li>
                </Link>

                <Link to="/movie">
                <li>
                    <PlayCircleFilledWhite className="side-bar-icon" />
                    <span>Movie</span> 
                </li>
                </Link>

                <li>
                    <CreditCard className="side-bar-icon" />
                    <span>Orders</span> 
                </li>

                <li>
                    <LocalShipping className="side-bar-icon" />
                    <span>Delivery</span> 
                </li>

                <h5>USEFUL</h5>
                <li>
                    <InsertChart className="side-bar-icon" />
                    <span>Stats</span> 
                </li>

                <li>
                    <Notifications className="side-bar-icon" />
                    <span>Notification</span> 
                </li>

                <h5>SERVICE</h5>
                <li>
                    <HealthAndSafety className="side-bar-icon" />
                    <span>System Health</span> 
                </li>

                <li>
                    <Psychology className="side-bar-icon" />
                    <span>Logs</span> 
                </li>

                <li>
                    <Settings  className="side-bar-icon" />
                    <span>Settings</span> 
                </li>

                <h5>USER</h5>
                <li>
                    <AccountCircle  className="side-bar-icon" />
                    <span>Profile</span> 
                </li>

                <li>
                    <Logout  className="side-bar-icon" />
                    <span>Logout</span> 
                </li>

            </ul>
        </div>


        <div className='sidebar-bottom'>
            <span>Color theme:</span> 
            <div className='sidebar-color-theme' onClick={()=>context.handleOnOff("")}></div>
            <div className='sidebar-color-theme' onClick={()=>context.handleOnOff("On")}></div>
        </div>
    </div>
  )
}

export default SideBar