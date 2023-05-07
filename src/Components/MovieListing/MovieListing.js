import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../Features/Movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.css'
import MovieCardUpper from '../MovieCard/MovieCardUpper'

function MovieListing() {
  const movies = useSelector(getAllMovies);
 
// function prints(i){console.log(i)}
 const renderMovies = movies.Response == 'True' ? (
  //  console.log(movies.Search),
    movies.Search.map((movie,index)=>{

       return(  
        <>
       
            <MovieCard key={index} data={movie}  />
           
            </>)

    })
  ) :(
    <div className="movies-error">
      <h2>{movies.Error}</h2>
    </div>
  )
 
  return (
    <>
    <div className="movie-wrapper">
      <div className="movie-list">
        
       
        <span className="movie-container "  style={{ display:'flex' , overflow:'scroll'}} >  {renderMovies}</span></div>
        </div>
     
    
    </>
  )
}

export default MovieListing
