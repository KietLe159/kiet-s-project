import React, { useEffect, useState } from 'react'
import "../scss/banner.scss"
import {PlayArrow, InfoOutlined} from '@mui/icons-material';
import movieApi from '../api/movieApi';
const Banner = ({type, setGenre, genreArr}) => {
  const [movie, setMovie]= useState({});
  
  useEffect(()=>{
    const fetchRandomMovie= async ()=>{
      try{
        const [randomMovie]= await movieApi.getMovieRandom({type})
        setMovie(randomMovie);
      }catch(error){
        throw error
      }
    }

    fetchRandomMovie();
  },[type])

  return (
    <div className='banner-container'>
        <img src={movie.img} alt="" />
       <div className='banner-brief'>
            
            <div className='banner-type' style={{visibility: type? "visible": "hidden"}}>
              <span>{type==="series"?"Series": "Movies"}</span>
              <select onChange={(e)=>{setGenre(e.target.value)}}>
                {genreArr.map((item, index)=>
                  <option value={item}  key= {`3-${index}`}>{item}</option>
                  )}
                
                
              </select>
            </div>
            
            <img src={movie.imgTitle} alt="" />
            <h1>{movie.title}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            
            <div className='banner-icon-container'>
              <div className='banner-icon'>
                <PlayArrow className='banner-icon-feature'/>
                <span>Play</span>
              </div>

              <div className='banner-icon'>
                <InfoOutlined className='banner-icon-feature'/>
                <span>Info</span>
              </div>
            </div>

       </div>
    </div>
  )
}

export default Banner