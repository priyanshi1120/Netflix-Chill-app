import React from 'react'
import MovieDetails from '../MovieDetails/MovieDetails';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addFavouriteMovies } from '../../Features/Movies/movieSlice';

function MovieCardUpper(props) {
    const dispatch = useDispatch();
    const data = props.data;
// console.log(data)
  const img = data.poster;
//   console.log(img)
// const id = data.imdbID;
//   const handleAddFavourite = () => {
//       dispatch(addFavouriteMovies({ id}));
//   };
    return (
        <>
            <div class="card bg-dark text-white col-12 " style={{overflow:'hidden'}}  >
                <img src={data.Poster} style={{}} class="card-img" alt="..."/>
                    <div class="card-img-overlay p-5 mx-3">
                    <h5><i className='text-danger ' style={{marginLeft:'-20px'}}>Trending</i></h5>
                        <h5 class="card-title">{data.Title}</h5>
                        <p class="card-text">This is a wider card with Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dicta, illo magnam autem doloribus molestias ea dolorem eligendi sunt. supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">{data.Type} Launched in {data.Year}</p>
                        <Link to={ `/MovieDetails/${data.imdbID}` } className="btn btn-danger m-2">
           Watch Now

          </Link> 
                    </div>
                    
            </div>
        </>
    )
}

export default MovieCardUpper
