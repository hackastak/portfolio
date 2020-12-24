import React from 'react';

import '../styles/css-reset.css';
import '../styles/index-styles.scss';


import Header from '../components/header';
import Banner from '../components/banner';


// Index Page markup
const IndexPage = () => (
  
  <div className="index-container">
    <div className="header">
      <Header />
    </div>
    <div className="banner">
      <Banner />
    </div>
  </div>
    
    
  
);

export default IndexPage;
