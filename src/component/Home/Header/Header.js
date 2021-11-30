import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
 
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand  href="/home">  SABBIR  </Navbar.Brand>
          <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
             <Nav.Link as={Link} to="/contract">Contract</Nav.Link>
             <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
             <Nav.Link as={Link} to="/about">About</Nav.Link>
            
           
            
           
    </Navbar.Collapse>
         
          </Container>
        </Navbar>
</>
        </div>
    );
};

export default Header;