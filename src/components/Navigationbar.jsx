import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const Navigationbar = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const handleClick = async () =>{
    try {
      await firebase.logout(); 
      console.log('logged out')
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">XYZ</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        {firebase.isLoggedIn && <Button variant='danger' className='mx-5' onClick={handleClick}>Log Out</Button>}
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigationbar
