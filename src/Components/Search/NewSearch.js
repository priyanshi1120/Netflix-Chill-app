import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../Features/Movies/movieSlice'
import { useSelector } from 'react-redux'
import Dummy from '../../Dummy';
import './NewSearch.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Link } from 'react-router-dom';

function NewSearch() {

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
    const handleFilter = (event) => {
        const SearchWord = event.target.value;
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
    const handleClick = () => {
        // console.log(filteredData)
        //    return( <MovieDetails value="filteredData" />)

    }
    return (
        <>
            {/* <span>{renderMovies}</span> */}
            <div className="input-group my-3 NegativeMargin">
                <input type="text" className="form-control" onChange={handleFilter} placeholder="Enter Movie" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <Link to={`/MovieDetails/${filteredData}`} className="btn btn-danger">
                        Search

                    </Link>
                    {/* <button className="btn btn-danger" onClick={handleClick} type="button">Search</button> */}
                </div>
            </div>

            <div className="container"><div className="row dataResult">
                {filteredData.map((value, key) => {
                    return (<><h6 > {value}</h6> <hr /></>);
                }
                )
                }

            </div></div>



        </>
    )
}

export default NewSearch