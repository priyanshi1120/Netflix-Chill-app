import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllMovies } from '../../Features/Movies/movieSlice'
import { Link, NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'


// function MovieDetails() {
//   return (
//     <div>
//       MovieDetails
//     </div>
//   )
// }
function MovieDetails(props) {
  const [NewData, setNewData] = useState({});
  const movies = useSelector(getAllMovies);
  const { type } = useParams()
  // console.log(movies)
  console.log({ type });
  useEffect(() => {
    const renderMovies = () => {
      movies.Response === 'True' ? (
        //  console.log(movies.Search),
        movies.Search.forEach((movie, index) => {
          if ((movie.imdbID === type )||(movie.Title === type)) {
            console.log("meri movie", movie)
            setNewData(movie)
          }

        })
      ) : (
        <div className="movies-error">
          <h2>Error aaya h </h2>
        </div>
      )

    }
    renderMovies();
  }, [])
  // console.log(NewData)
  // const renderMovies = movies.imdbID === type ? (
  //   console.log(movies)

  // ) : (
  //   <div classNameName="movies-error">
  //     <h2>{movies.Error}</h2>
  //   </div>
  // )
  return (
<div className="container">
    <div>
      <div className="card mb-3" style={{ width: '60vw', height: '70vh' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={NewData.Poster} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{NewData.Title}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur voluptatem earum exercitationem et quibusdam? Dicta veritatis adipisci eum officia? This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">{NewData.Year}</small></p>
              {/* <Link to={`/Favourites/${NewData.imdbID}`} className="btn btn-danger m-2">Favourite</Link> */}
              <button className='btn btn-danger'>Watch Now</button>
            </div>
            
          </div>
        </div>
      </div>
    </div></div>
  );
}


export default MovieDetails
