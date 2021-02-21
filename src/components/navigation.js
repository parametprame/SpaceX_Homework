import React from "react";
import '../App.css'
import SpaceXImg from '../media/spaceX.png'
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUserAstronaut, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar style={{ backgroundColor: "black" }} expand="lg" variant="dark" fixed='top'>
        <Container>
            <Link to="/">
              <img src={SpaceXImg} loading="lazy" style={{height:'auto', width:'auto', maxWidth:'250px', maxHeight:'60px'}} />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto mr-5">
                <NavLink exact to="/" className="inactive mx-2" activeClassName="active mx-2"><FontAwesomeIcon icon={faUserAstronaut} />{' '}Home</NavLink>
                <NavLink to="/Rockets" className="inactive mx-2" activeClassName="active mx-2"><FontAwesomeIcon icon={faRocket} />{' '}Rockets</NavLink>
                <NavLink to="/Launches" className="inactive mx-2" activeClassName="active mx-2"><FontAwesomeIcon icon={faSpaceShuttle} />{' '}Launches</NavLink>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment >
  );
};

export default Navigation