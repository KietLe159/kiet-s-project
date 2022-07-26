import React from 'react'
import Banner from '../components/Banner'
import MovieSlider from '../components/MovieSlider'
import NavBar from '../components/NavBar'
import "../scss/home.scss"
import listApi from "../api/listApi";
import { useEffect, useState } from "react";

const Home = ({type}) => {
  const [list, setList]= useState([]);
  const [genre, setGenre]= useState("");

  useEffect( ()=>{
    const fetchApi= async ()=>{
      try{
        const data= await listApi({type, genre});
        setList(data);
      }catch(error){
        throw error
      }
    }
    
    fetchApi();
  },[type, genre])
  const genreArr = list.reduce((arr,item)=>[...arr, item.genre] ,[])

  return (

    <div className= 'home-container'>
        <NavBar />
        <Banner type={type} genreArr={genreArr} setGenre={setGenre}/>

        {list.map((item, index)=>
           
        <MovieSlider 
        key={`2-${index}`}
        list={item}
        />
        )}
        

    </div>
  )
}

export default Home