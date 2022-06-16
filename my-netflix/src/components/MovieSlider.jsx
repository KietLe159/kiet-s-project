import React from 'react'
import Slider from "react-slick";
import "../scss/movieSlider.scss"
import MovieItem from './MovieItem';
import {ArrowForwardIos, ArrowBackIosNew} from '@mui/icons-material';

const CustomArrow= (props)=>{
  const { className, style, onClick, type } = props;
  
  return(
    <>
    {type==="arrow-prev"?
    <ArrowBackIosNew className={`${className} slick-custom-arrow`} style={style} onClick={onClick}/>
    :<ArrowForwardIos className={`${className} slick-custom-arrow`} style={style} onClick={onClick}/>
  }
    </>
    
  )
}

const MovieSlider = ({list}) => {
  const {content, title}=list;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <CustomArrow type="arrow-next"/>,
       prevArrow: <CustomArrow type="arrow-prev"/>
      };

  return (
    <div className='slider-container'>
        <h1>{title}</h1>
        <Slider {...settings}>
          {content.map((item,index)=>
          <MovieItem 
            key={`1-${index}`}
            id={item}
          />
          )}
            
        </Slider>

    </div>
  )
}

export default MovieSlider