import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiCart } from "react-icons/bi";import Cart from './Cart';
;

const NavbarEco = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    
    <Navbar bg="dark" variant="dark" expand='lg'>
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/product" className="text-white">
              Categories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-success" onClick={handleShow} className=""><BiCart className='fs-3'/></Button>
      </Container>
    </Navbar>
    <Cart show={show} handleClose={handleClose}/>
    </>
  );
};

export default NavbarEco;
