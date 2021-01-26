//Import Dependencies
import React from 'react';

//Import icons
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';

//Import Styles
import '../styles/css-reset.css';
import '../styles/contact-styles.scss';


const Contact = () => {

  return (
    <div className="contact-container">
      <h1 className="container-title">Drop a Line</h1>
      <div className="underline-container">
        <div className="underline"></div>
      </div>
      <div className="contact-info-container">
        <div className="contact-message-container">
          <p className="contact-message">
            If you have an idea or simply need help or advice, reach out to me via any of the below platforms. Let me know something! :)
          </p>
        </div>
        <div className="contact-options-container">
          <a className="contact-option" target="_blank" rel="noreferrer" href="mailto:ahwig93@gmail.com"><FaEnvelopeSquare alt="Email" /></a>
          <a className="contact-option" target="_blank" rel="noreferrer" href="https://www.instagram.com/dev.wig/"><FaInstagramSquare alt="Instagram"/></a>
          <a className="contact-option" target="_blank" rel="noreferrer" href="https://www.facebook.com/hunter.wiginton.3/"><FaFacebookSquare alt="Facebook"/></a>
          <a className="contact-option" target="_blank" rel="noreferrer" href="https://twitter.com/wiginton_hunter"><FaTwitterSquare alt="Twitter"/></a>
          <a className="contact-option" target="_blank" rel="noreferrer" href="tel: 6628016487"><FaPhoneSquare alt="Phone"/></a>
        </div>
      </div>
    </div>
  );
}



export default Contact;