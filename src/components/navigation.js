import React from "react";
import '../App.css'
import SpaceXImg from '../media/spaceX.png'

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{backgroundColor:'black'}}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={SpaceXImg} loading="lazy" style={{height:'auto', width:'auto', maxWidth:'250px', maxHeight:'60px'}} />
          </a>
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
              <li className="nav-item mx-2">
                <a className="nav-link " aria-current="page" href="/Home" style={{fontWeight: 'bold'}}>Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link " aria-current="page" href="/Rocket" style={{fontWeight: 'bold'}}>Rockets</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link " href="/Launches" style={{fontWeight: 'bold'}}>Launches</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment >
  );
};

export default Navigation;
