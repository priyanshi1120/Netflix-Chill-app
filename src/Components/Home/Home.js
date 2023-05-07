import React from 'react';
import { useEffect } from 'react';
import MovieApi from '../../Commons/Apis/MovieApi';
import {APIkey} from '../../Commons/Apis/MovieApiKey';
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../Features/Movies/movieSlice';
import NewSearch from '../Search/NewSearch';

import MovieCardUpperListing from '../MovieListing/MovieCardUpperListing';



function Home(props) {
    // console.log(props.type)
    const movieText = props.type;
    const dispatch = useDispatch();
    useEffect(() => {
  
    const fetchMovies = async ()=>{
        const response =await MovieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err)=>{
            console.log("Err h mera:",err)
        });
        // console.log("pijhg")
       dispatch(addMovies(response.data))
    };
    fetchMovies();

},[])
return (
    <>
    <MovieCardUpperListing/>
    
    <div className="banner-img mt-4" ></div>
   
    <h5><i className='text-danger  mt-4' style={{marginLeft:'-20px' }}>Recommende for You!!</i></h5>
    <MovieListing/>
    </>
  )
}

export default Home;
// export  {response} ;
