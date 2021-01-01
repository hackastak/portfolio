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

// Index Page markup
const IndexPage = () => (
  
  <div className="index-container">
    <div className="header">
      <Header />
    </div>
    <div className="banner">
      <Banner />
    </div>
    <div className="work">
      <Work />
    </div>
    <div className="about">
      
    </div>
  </div>
    
    
  
);

export default IndexPage;
