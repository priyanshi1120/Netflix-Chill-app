import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { getAllMovies } from '../../Features/Movies/movieSlice';
import { getAllFavouriteMovies } from '../../Features/Movies/movieSlice';
import { useSelector } from 'react-redux';
import FavouriteCard from './FavouriteCard';
import '../MovieListing/MovieListing.css'

function Favourites() {
  const [value, setValue] = useState({})
  const movies = useSelector(getAllMovies);
  const Fmovies = useSelector(getAllFavouriteMovies);
  function ShowFav() {
   const favs= Object.keys(Fmovies).map((Vdata) => {
     
       
   const favouriteCard=   movies.Search.map((movie, index) => {
          if (movie.imdbID === Vdata) {
            // console.log({movie});
            return (
              <>
                <FavouriteCard  key={index} data={movie} />
              
              </>
            )
          }
          else{
            return null;
          }
        }).filter(x => x);
        console.log(favouriteCard,Vdata)

      return favouriteCard;
    })
    // console.log(favs)
   return favs; 
  }
  return (
    <>
      <div className="container">
        <div className="row">
        <Link to="/" className=" float-right col-1 m-3  btn btn-danger">ADD more</Link> 

          <span className="movie-container " style={{ overflow: 'scroll' }} > 
          {
           ShowFav()
          }</span></div>
      </div>    </>
  )
}

export default Favourites
