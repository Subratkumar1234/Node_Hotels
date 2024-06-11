import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <h3>Contact Us</h3>
      <p>Email: contact@heritagehotel.com</p>
      <p>Phone: +91 12345 67890</p>
      <div className="social-media">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
        <a href="#twitter">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
