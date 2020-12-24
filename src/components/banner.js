import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
        <p className="blurb">Hi, my name is Hunter Wiginton, and I am a web developer and graphic designer. </p>
      </div>

    </div>
  );

}

export default Banner;