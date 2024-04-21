import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../../assets/img/logo.svg";
export default function Header() {
    return (
        <Navbar bg="" expand='lg' className='Header'>
            <Navbar.Brand href="#home"className='Header-logo-section' >
                <img className='Header-logo' src={logo}></img>
                
                <p className='Header-title'>Zingg Factor</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'end'}}> 
                <Nav className=""  >
                    <Nav.Link href="#home" className='link'>Home</Nav.Link>
                    <Nav.Link href="#link" className='link'>Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
