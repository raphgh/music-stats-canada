import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';
import logoImg from "./images/logo.png"

function NavBar() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

return (
    <>
        <Navbar className='NavBar'>
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="NavBarBrand" style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            marginRight: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <img
                            src={logoImg}
                            alt="Logo"
                            style={{
                                width: '52px',
                                height: '52px',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    Music Canada Stats
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/analysis">Analysis</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About MCanadaStats</Nav.Link>
                    <Nav.Link as={NavLink} to="/surveyprogram">Survey Programs</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    <button onClick={toggleLanguage}>
                        {i18n.language === 'en' ? 'FR' : 'EN'}
                    </button>
                </Nav>
            </Container>
        </Navbar>
    </>
);
}

export default NavBar;