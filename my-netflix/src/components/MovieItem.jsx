import React, { useEffect, useState } from 'react'
import "../scss/movieItem.scss"
import { ThumbUpAltOutlined, PlayArrow, ThumbDownAltOutlined, Add } from '@mui/icons-material';
import movieApi from '../api/movieApi';
import { Link } from 'react-router-dom';

const MovieItem = ({id}) => {
  const [isPlay, setIsPlay]= useState(false);
  const [movie, setMovie]= useState({})

  useEffect(()=>{
    const fetchMovieApi= async (id)=>{
    try{
      const data= await movieApi.getMovieById(id);
      setMovie(data);
    }catch(error){
      throw error
    }
  }
  fetchMovieApi(id);
  },[id])

  return (
    <div onMouseLeave={()=>setIsPlay(false)} onMouseEnter={()=>setIsPlay(true)} className= 'movie-container'>
        <img src= {movie.imgSm} alt="" />
       { isPlay&& <Link to="/watch" state={{movie:movie.trailer}} ><video src= {movie.trailer} autoPlay={true} loop />
       </Link> 
}
    <div className='movie-detail'>
        
        <div className='movie-icons'>
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>

        <div className='movie-info'>
            <span>{movie.time}</span>
            <span className='movie-info-limit'>{`+${movie.limit}`}</span>
            <span>{movie.year}</span>
        </div>  

        <div className='movie-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>

        <div className='genre'>
            {movie.genre}
        </div>
    </div>
    </div>
  )
}

export default MovieItem