import './App.css';
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import MovieDetails from './Components/MovieDetails/MovieDetails'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import NewSearch from './Components/Search/NewSearch';
import Main from './Components/Home/Main';
import Favourites from './Components/Favourites/Favourites';
import React, { useState, useEffect } from 'react';
import { ThreeCircles} from 'react-loader-spinner';
import SirSearch from './Components/Search/SirSearch';

function App() {


  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // simulate fetching data
      await new Promise(resolve => setTimeout(resolve, 2000));
      setData({ message: 'Hello, world!' });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
<div className="container">
  <div className="row" style={{height:'100vh'}}>
    <div className=" offset-5 my-auto col-2">
      <ThreeCircles
        type="Puff"
        color="red"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
  </div>
</div>
     
    );
  }

  return (
  

<>
    <div className="app">
<Router>
  <Header/>
  

  <Routes>
  <Route path="/search"  element={<SirSearch />} />
<Route path="/Favourites/:movie" element ={<Favourites/>}/>

  <Route path="/" exact element={<Main/>} />
  <Route path="/MovieDetails/:type" element={<MovieDetails />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
 
 
</Router>

    </div>
  </>
  );
}

export default App;
