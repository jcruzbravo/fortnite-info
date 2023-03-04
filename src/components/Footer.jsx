import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import '../styles/Footer.scss';

const colorFacebook =  '#3b5998';
const colorTwitter = '#55acee';
const colorInstagram = '#ac2bac';
const colorTwitch= '#a970ff';
const colorGithub= '#333333';

function Footer() {
  return (
    <footer>
      <div className="Footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="icons-social-media">
              <FaFacebook color={colorFacebook} size={28}/>
              <FaTwitter color={colorTwitter} size={28}/>
              <FaTwitch color={colorTwitch} size={28}/>
              <FaGithub color={colorGithub} style={{filter: 'invert(1)'}} size={28}/>
              <FaInstagram color={colorInstagram} size={28}/>
            </div>

            <div className="description">
              <p>&copy; 2023 Joaquin. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;