import React from 'react'
import Home from './Home'
import PropTypes from 'prop-types'
import NewSearch from '../Search/NewSearch'
function Main() {

  return (
    <>
    <div className="container-fluid" >
    <div className="container">
        <div className="row">
            <div className="col-12">
     <NewSearch/>
      
      {/* <Home type="harry" /> */}
      <Home type="pokemon" />
   
      </div>
        </div></div>
    </div>
    </>
  )
}

Main.prototypes = {
    type : PropTypes.string
};

export default Main
