// Import Dependencies
import React, { useState} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'

// Import Components
import '../styles/css-reset.css';
import '../styles/header-styles.scss';

// Styled components
const MenuIcon = styled.button`
  div {
    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const MenuLinks = styled.nav`
  // transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(5000px)")};
  display: ${({ nav }) => (nav ? "flex" : "none")};
`

const Header = () => {
  const [nav, showNav] = useState(false)

  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">dev.wig</Link>
          </div>
          <div className="desktop-navigation">
            <nav>
              <Link to="/#work">Work</Link>
              <Link to="/#About">About</Link>
              <Link to="/#contact">Contact</Link>
              <Link to="/#links">Links</Link>
            </nav>
          </div>
          <div className="mobile-navigation">
            <MenuIcon className="hamburger-btn" nav={nav} onClick={() =>  showNav(!nav)}>
              <div className="top-line"></div>
              <div className="middle-line"></div>
              <div className="bottom-line"></div>
            </MenuIcon>
        
            
            <MenuLinks className="nav-links" nav={nav}>
              
              <ul>
                <li>
                  <a href="/">Work</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Links</a>
                </li>
              </ul>
              
            </MenuLinks>
          </div>
        </div>
      </div>
      
    </header>
  );
};
    
export default Header;