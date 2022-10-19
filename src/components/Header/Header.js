import React, { useContext } from 'react';

import {  Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { AuthContext } from '../../UserContext/UserContext';
// import UserContext from './../UserContext/UserContext';

const Header = () => {
  // const {user} =useContext(AuthContext)
  const {user, logOut} = useContext(AuthContext)
  console.log('context', user)

  const handleSignout =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
    return (
        <div>


<Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand className='title' href="#home">Hotel Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="px-3  nav" to="/">Home</NavLink>
            <NavLink className="px-3  nav" to="/bookroom">BookRoom</NavLink>
            <NavLink className="px-3  nav" to="/login">Login</NavLink>
            <NavLink className="px-3  nav" to="/register">Register</NavLink>
            {
              user?.email ?
              <button onClick={handleSignout} className='btn btn-info'>Logout</button>
              :
              <Link to='/login'>
              <button onClick={handleSignout} className='btn btn-info'>Login</button>
              </Link>

            }
            <span>{user?.email}</span>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>








            
            {/* <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/Register'>Register</Link> */}

{/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hotel Website</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="px-3 text-info" to='/'>Home</NavLink>
            <NavLink className="px-3 text-info" to='/login'>Login</NavLink>
            <NavLink className="px-3 text-info" to='/Register'>Register</NavLink>
          </Nav>
        </Container>
      </Navbar> */}



        </div>
    );
};

export default Header;