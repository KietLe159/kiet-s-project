import React from 'react'
import {ArrowBack} from '@mui/icons-material';
import "../scss/watch.scss"
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
  const location= useLocation();
  const {state:{movie}}= location;
  return (
    <div className='watch-container'>
      <Link to="/">
        <div className='watch-navigate'>
          
          <ArrowBack className='watch-icon'/>
          <span>Home</span>
          
        </div>
        </Link>
        <video src={movie} autoPlay={true} loop controls muted />
    </div>
  )
}

export default Watch