//Import dependencies
import React from 'react';

//Import styles sheets
import '../styles/css-reset.css';
import '../styles/index-styles.scss';
import '../styles/header-styles.scss';
import '../styles/banner-styles.scss';

//Import components
import Header from '../components/header';
import Banner from '../components/banner';
import Work from '../components/work';
import About from '../components/about';
import Contact from '../components/contact';


// Index Page markup
const IndexPage = () => (
  
  <div className="index-container">
    <div className="header" id="header">
      <Header />
    </div>
    <div className="banner" id="banner">
      <Banner />
    </div>
    <div className="work" id="work">
      <Work />
    </div>
    <div className="about" id="about">
      <About />
    </div>
    <div className="contact" id="contact">
      <Contact />
    </div>
  </div>
    
    
  
);

export default IndexPage;
