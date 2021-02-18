import React from "react";
import '../App.css'
import SpaceXImg from '../media/spaceX.png'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{backgroundColor:'black'}}>
        <div className="container">
          <Link to='/' className='navbar-brand'>
            <img src={SpaceXImg} loading="lazy" style={{height:'auto', width:'auto', maxWidth:'250px', maxHeight:'60px'}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="collapseEx2">
            <ul className="navbar-nav ms-auto mb-5 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link " aria-current="page" to="/" style={{fontWeight: 'bold'}}>Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " aria-current="page" to="/Rockets" style={{fontWeight: 'bold'}}>Rockets</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/Launches" style={{fontWeight: 'bold'}}>Launches</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment >
  );
};

export default Navigation;
