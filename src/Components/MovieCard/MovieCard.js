import React from 'react'
import MovieDetails from '../MovieDetails/MovieDetails';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addFavouriteMovies } from '../../Features/Movies/movieSlice';

function MovieCard(props) {
  const dispatch = useDispatch();

  const data = props.data;
const id = data.imdbID;
  const handleAddFavourite = () => {
      dispatch(addFavouriteMovies({ id}));
  };
  //  console.log(data);

  return (
    <>
      <span className="card col-lg-4 m-3 " style={{ width: '18rem' }}>
        <img src={data.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.Title}</h5>
          <p className="card-text">{data.Type} Launched in {data.Year}</p>
           <Link to={ `/MovieDetails/${data.imdbID}` } className="btn btn-danger m-2">
           Watch Now

          </Link> 
         <Link to={`/Favourites/${data.imdbID}`} onClick={handleAddFavourite} className="btn btn-danger m-2">Favourite</Link>
         
        </div>
      </span>

    </>
  )
}

export default MovieCard
