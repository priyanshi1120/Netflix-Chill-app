import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteFavouriteMovies } from '../../Features/Movies/movieSlice';


function FavouriteCard(props) {

  const dispatch = useDispatch();
  const data = props.data;
const id = data.imdbID;
  const handleUnFavourite = () => {
    dispatch(deleteFavouriteMovies({ id}));
};
  console.log("fijug")
  const Data = props.data
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"><img src={Data.Poster} /></div>
        <div className="col-7">
          <h3>{Data.Title}</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corrupti a consequuntur molestiae quidem aliquid sint sequi beatae suscipit, ipsum nobis dignissimos eaque totam, et natus in asperiores. Cum, exercitationem?</p>
          <p>{Data.Type} Launched in {Data.Year} </p>
          <p>{Data.imdbID}</p>

          <div className="col-4 btn btn-danger">Watch Now</div>
         <button onClick={handleUnFavourite} className='btn btn-danger m-2'>Unfav</button>
          {/* <Link to={`/Favourite/${Data.imdbID}`}  onClick={handleUnFavourite} className="btn btn-danger m-2">Unfavourite</Link> */}
        </div>
      </div>
      <br />

    </div>
  )
}

export default FavouriteCard
