import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedin from '../assets/linkedin.svg';
import facebooksquare from '../assets/facebook-square.svg';
import instagram from '../assets/instagram.svg';
import logo from '../assets/small_logo.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        const scrollTop = window.pageYOffset;
        setScrolled(scrollTop > 0);
      };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }



    return (
        <Navbar expand="lg" fixed="top" className={scrolled ? "shadow-sm" : ""}>
        <Container>
          <Navbar.Brand href="#home" className=""><img src={logo} alt="Icon"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center justify-content-center">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects ' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={linkedin} alt="Icon" /></a>
                    <a href="#"><img src={facebooksquare} alt="Icon" /></a>
                    <a href="#"><img src={instagram} alt="Icon" /></a>
                </div>
                <button className="" onClick={() => console.log('connect')}><span>Lets Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}