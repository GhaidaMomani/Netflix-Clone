import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
 import { Link } from 'react-router-dom'; 

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/favList">Movies List</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;