import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

//Import Icons
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

import '../styles/css-reset.css';
import '../styles/banner-styles.scss';


const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImg: file(relativePath: { eq: "portfolio_Profile.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner-container">
      <div className="image-container">
        <Img className="top-center-img"fluid={data.profileImg.childImageSharp.fluid} />
      </div>
      <div className="blurb-container">
        <p>Hi, my name is Hunter Wiginton.</p>
        <p>I am a web developer and graphic designer. </p>
        <p>Have an idea?</p>
        <button>Let's talk!</button>
        <div className="social-link-container">
          <a className="social-icon" target="_blank" href="https://www.instagram.com/dev.wig/"><FaInstagramSquare /></a>
          <a className="social-icon" target="_blank" href="https://www.facebook.com/hunter.wiginton.3/"><FaFacebookSquare /></a>
          <a className="social-icon" target="_blank" href="https://www.facebook.com/hunter.wiginton.3/"><FaTwitterSquare /></a>
        </div>
        
        
      </div>

    </div>
  );

}

export default Banner;