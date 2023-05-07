import React from 'react'
import AlienGif from "./alien-alien-dance.gif"
import { Link, NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div class="card bg-dark text-white col-12 " style={{ overflow: 'hidden' }}  >
              <img src={AlienGif} class="card-img" alt="Example GIF" style={{ height: '80vh', width: '100vw' }} />
              <div className="card-img-overlay p-5 m-5">
                <h1 style={{ color: 'black' }} className='mx-auto mt-5'>404 NOT FOUND ERROR
                  <Link to={"/"} className=" m-2 btn text-danger"><h2>   Go back to Home page {"->"}</h2>
                 

                  </Link>
                </h1>

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PageNotFound
