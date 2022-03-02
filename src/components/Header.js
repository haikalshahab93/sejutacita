
import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
import {Link,NavLink} from "react-router-dom";


const Header = () => (
  <Navbar  expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand>
          <img
            src="/sejutacita2.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Sejuta Cita logo"
          />
          <Link to="/" style={{color:"white", textDecoration:"none"}}>Sejuta Cita + </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="categories" style={{color:"white", textDecoration:"none"}} className="mx-3">Books</NavLink>
            <NavLink to="mybookmark" style={{color:"white", textDecoration:"none"}} className="mx-3">MyBookMark</NavLink>    
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
)

export default Header;