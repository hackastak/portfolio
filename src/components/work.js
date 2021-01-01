//Import Dependencies
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

//Import icons
import { FaStore } from 'react-icons/fa';
import { FaDraftingCompass } from 'react-icons/fa';
import { FaTerminal } from 'react-icons/fa';
import { FaHashtag } from 'react-icons/fa';
import { FaMagic } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';

//Import Styles
import '../styles/css-reset.css';
import '../styles/work-styles.scss';


const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      moreImg: file(relativePath: { eq: "MORE-site.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spcImg: file(relativePath: { eq: "SPC-site.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ljImg: file(relativePath: { eq: "LJ-site.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bfcImg: file(relativePath: { eq: "B40C-site.png" }) {
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
      <h1 className="container-title">What I Do</h1>
      <div className="underline-container">
        <div className="underline"></div>
      </div>
      <div className="skill-cards-container">
        <div className="skill-card">
          <span className="skill-icon"><FaStore /></span>
          <h3 className="skill-title">E-Commerce</h3>
          <p className="skill-description">Product Integration, Pricing, Shipping, Policy Setup, Cart Configuration, Payment Setup</p>
        </div>
        <div className="skill-card">
          <span className="skill-icon"><FaDraftingCompass /></span>
          <h3 className="skill-title">Graphic Design</h3>
          <p className="skill-description">Logos, Letterheads, Packaging, Merchandise, Album Covers, Vector Art, Color Schemes</p>
        </div>
        <div className="skill-card">
          <span className="skill-icon"><FaTerminal /></span>
          <h3 className="skill-title">Development</h3>
          <p className="skill-description">Domain Services, Hosting, Backend Configuration, User Auth, Databases, APIs, Application Optimization</p>
        </div>
        <div className="skill-card">
          <span className="skill-icon"><FaHashtag /></span>
          <h3 className="skill-title">Social Media</h3>
          <p className="skill-description">Content Scheduling, Hashtag Optimization, Advertisement Setup, Promotional Content, Collaborations</p>
        </div>
        <div className="skill-card">
          <span className="skill-icon"><FaMagic /></span>
          <h3 className="skill-title">Automation</h3>
          <p className="skill-description">Email, Financial Tracking, File Transfer, File Manipulation, Web Scraping, Data Acquisition & Manipulation</p>
        </div>
        <div className="skill-card">
          <span className="skill-icon"><FaCloud /></span>
          <h3 className="skill-title">DevOps</h3>
          <p className="skill-description">Amazon Web Services (AWS), Azure, CI/CD, Docker Containers, Kubernetes Clustering, Messaging, Deployment</p>
        </div>
      </div>

      <h1 className="container-title">Latest Works</h1>
      <div className="underline-container">
        <div className="underline"></div>
      </div>
      <div className="project-cards-container">
        <div className="project-card">
          <div className="project-card-image">
            <Img className="site-image" fluid={data.moreImg.childImageSharp.fluid}  alt="MORE Site Snapshot"/>
          </div>
          <h1 className="project-card-title">Moorhead Off-Road Engineering</h1>
          <p className="project-card-description">Built and powered by Shopify,   this site brought MORE sales online and out of Facebook Messenger.</p>
          <div className="project-card-tech-icons"></div>
          <a href="https://moorheadoffroadengineering.com" target="_blank" rel="noopener noreferrer">View  Project</a>
        </div>
        <div className="project-card">
          <div className="project-card-image">
            <Img className="site-image" fluid={data.spcImg.childImageSharp.fluid}   alt="SPC Site Snapshot"/>
          </div>
          <h1 className="project-card-title">Shady Print Co.</h1>
          <p className="project-card-description">Family owned and operated by a  sibling duo of graphic designers, this site serves as a display design   talents while offering their following a way to support them.</p>
          <div className="project-card-tech-icons"></div>
          <a href="https://shadyprintco.com" target="_blank" rel="noopener  noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <div className="project-card-image">
            <Img className="site-image" fluid={data.ljImg.childImageSharp.fluid}  alt="LJ Site Snapshot"/>
          </div>
          <h1 className="project-card-title">Leclear Jewelry</h1>
          <p className="project-card-description">Locally owned and family  operated since before the internet even existed, this modest site is the   MVP and first step to building their online presence.</p>
          <div className="project-card-tech-icons"></div>
          <a href="https://leclearjewelry.com" target="_blank" rel="noopener noreferrer">View  Project</a>

        </div>
        <div className="project-card">
          <div className="project-card-image">
            <Img className="site-image" fluid={data.bfcImg.childImageSharp.fluid}   alt="Back 40 Site Snapshot"/>
          </div>
          <h1 className="project-card-title">Back 40 Customs</h1>
          <p className="project-card-description">Back 40 Customs is a new local  company in Tupelo, MS. This site works to showcase their custom woodwork   and epoxy resin art.</p>
          <div className="project-card-tech-icons"></div>
          <a href="https://back40customs.com" target="_blank" rel="noopener noreferrer">View  Project</a>
        </div>

      </div>

    </div>
  );
}



export default Work;