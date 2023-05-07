import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../Features/Movies/movieSlice'
import { useSelector } from 'react-redux'
import Dummy from '../../Dummy';
import './NewSearch.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Link } from 'react-router-dom';

function SirSearch() {

    let MovieArray = [];
    const movies = useSelector(getAllMovies);
    // console.log(movies.Response)
    const renderMovies = movies.Response == 'True' ? (
        //  console.log(movies.Search),
        movies.Search.forEach((movie, index) => {
            //    console.log(movie)
            MovieArray[index] = movie.Title;
        })
    ) : (
        <div classNameNameName="movies-error">
            <h2>{movies.Error}</h2>
        </div>
    )
    // console.log(MovieArray)
    const [filteredData, setFilterData] = useState([]);
    const [SearchWord,SetSearchWord] = useState();
    const handleFilter = (event) => {
        SetSearchWord(event.target.value);
        const NewFilter = MovieArray.filter((value) => {
            return (value.toLowerCase().includes(SearchWord.toLowerCase()));
        });
        if (SearchWord === "") {
            setFilterData([]);
        }
        else {
            setFilterData(NewFilter);
        }
    }
  
    return (
        <>
            {/* <span>{renderMovies}</span> */}
            <div className="input-group my-3 NegativeMargin">
                <input type="text" value={SearchWord} className="form-control"  onChange={handleFilter} placeholder="Enter Movie"  />
                <div className="input-group-append">
                    <Link to={`/MovieDetails/${filteredData}`} className="btn btn-danger">
                        Search

                    </Link>
                    {/* <button className="btn btn-danger" onClick={handleClick} type="button">Search</button> */}
                </div>
            </div>

            <div className="container"><div className="row dataResult">
                {filteredData.map((value, key) => {
                    return (<><h6 onClick={() =>{
                        SetSearchWord(value)}} > {value}</h6> <hr /></>);
                }
                )
                }

            </div></div>



        </>
    )
}

export default SirSearch