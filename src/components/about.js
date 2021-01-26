//Import Dependencies
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';



//Import Styles
import '../styles/css-reset.css';
import '../styles/about-styles.scss';


const About = () => {
  const aboutPics = useStaticQuery(graphql`
    query {
      topLeftImg: file(relativePath: { eq: "working.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      midRightImg: file(relativePath: { eq: "Father.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bottomLeftImg: file(relativePath: { eq: "focused.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    
  `)

  return (
    <div className="work-container">
      <h1 className="container-title">About Me</h1>
      <div className="underline-container">
        <div className="underline"></div>
      </div>
      

   {/* <Img className="site-image" fluid={data.moreImg.childImageSharp.fluid}  alt="MORE Site Snapshot"/> */}   
      <div className="about-me-container">
        <div className="about-me-blurb-container">
          <p className="about-me-blurb">I earned my B.S. in Mechanical Engineering in 2016 after working full-time and going to school full-time for 5 years. Then I proceeded to use all the extra time I had to teach myself something completely new. I went from learning how to play guitar and piano to learning how to make music with software, then on to learning how to make the software itself.</p>
          <p className="about-me-blurb">From there, I got into full-stack web development and software development, and now, I'm an experienced full-stack web developer. I continue working as a freelancer helping small businesses start and build their online presence.
          </p>
          <p className="about-me-blurb">Nerding out in front of my computer is not all I do though. I am also a proud husband and father to the best family ever. I also really enjoy winding down by playing a few rounds of COD: MW (IYKYK). :) Also, just in case you were wondering, I am not superstitious. I am a little stitious... :D.</p>
        
        </div>
        <div className="about-me-photo-container">
          <div className="about-me-profile-photos">
            <div className="upper-left-photo-container">
              <Img className="upper-left-photo" fluid={aboutPics.topLeftImg.childImageSharp.fluid} alt="Family Photo" />
            </div>
            <div className="mid-right-photo-container">
              <Img className="mid-right-photo" fluid={aboutPics.midRightImg.childImageSharp.fluid} alt="Family Photo" />
            </div>
            <div className="bottom-left-photo-container">
              <Img className="bottom-left-photo" fluid={aboutPics.bottomLeftImg.childImageSharp.fluid} alt="Family Photo" />
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}



export default About;
