import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../Features/Movies/movieSlice'

import MovieCardUpper from '../MovieCard/MovieCardUpper'

function MovieCardUpperListing() {
    const movies = useSelector(getAllMovies);
 
//  function prints(i){console.log(i)}
 const renderMovies = movies.Response == 'True' ? (
//  console.log(movies.Search),
    movies.Search.map((movie,index)=>{

       return(  
        <>
       
            <MovieCardUpper key={index} data={movie}  />
           
            </>)

    })
  ) :(
    <div className="movies-error">
      <h2>{movies.Error}</h2>
    </div>
  )
  return (
    <div>
       <div className="container">
      <div className="row">
        
       
        <span className="movie-container "  style={{ display:'flex', overflow:'scroll' , height:'70vh'}} >  {renderMovies}</span></div>
        </div>
     
    
    
    </div>
  )
}

export default MovieCardUpperListing
