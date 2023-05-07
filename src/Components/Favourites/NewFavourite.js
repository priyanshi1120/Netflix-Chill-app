import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllMovies } from '../../Features/Movies/movieSlice'
import {getAllFavouriteMovies } from '../../Features/Movies/movieSlice'

import { useSelector } from 'react-redux'
import FavouriteCard from './FavouriteCard';
function Favourites() {
    const [NewData, setNewData] = useState({});
    const movies = useSelector(getAllMovies);
    const Fmovies = useSelector(getAllFavouriteMovies);
    // const { movie } = useParams()
    // const movie=Fmovies;
    // console.log("F",Fmovies.undefined.Fdata)
    console.log(Object.keys(Fmovies))
//     const favouriteMovieIds = Object.id(Fmovies);
//     const favouriteMovieList = favouriteMovieIds.map((movieId) => {
//       const movieInfo = Fmovies[movieId];
//       console.log("movieinfo",movieInfo );
// return(movieInfo)
//       // return {
//       //     id: movieId,
//       //     title: movieInfo.title,
//       //     year: movieInfo.year
//       // };
//   });
    // const renderMovies = movies.Response == 'True' ? (
    //   //  console.log(movies.Search),
    //     Fmovies.map((movie,index)=>{
    //        return(      <MovieCard key={index} data={movie}  />)
    //     })
    //   ) :(
    //     <div className="movies-error">
    //       <h2>{movies.Error}</h2>
    //     </div>
    //   )




    useEffect(() => {
      const Favmovie = () => {
        movies.Response === 'True' ? (
          //  console.log(movies.Search),
          movies.Search.forEach((Movie, index) => {
            if ((Movie.imdbID === Fmovies)) {
              // console.log("meri movie", Movie)
              setNewData(Movie)
            }
  
          })
        ) : (
          <div className="movies-error">
            <h2>Error aaya h </h2>
          </div>
        )
  
      }
      Favmovie();
    }, [])
  return (
    <>
   {
          Fmovies.map((eachData) => {

    <FavouriteCard value={NewData} />
          })
   }
    {/* <span className="movie-container "  style={{ display:'flex' , overflow:'scroll'}} >  {renderMovies}</span> */}
 {/* {favouriteMovieList} */}
    </>
  )
}

export default Favourites
