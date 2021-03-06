import React, { Component } from 'react';
import './Footer.css';
import facebook_logo from '../../assets/images/f_logo_RGB-Blue_1024.png';
import discord_logo from '../../assets/images/Discord-Logo-White.svg';
import FA from 'react-fontawesome';

//import Link from '../link/Link';
//import { Link } from 'react-router-dom';
//import crc_heart from '../../assets/images/CRC_HEART_RD_T.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-Icons">
          <a
            href="https://discord.gg/A4XqWGA"
            target="_blank"
            rel="noopener noreferrer"
            className="FooterBtn"
            style={{ backgroundColor: '#7289DA' }}>
            <img className="Footer-Discord" src={discord_logo} alt="Footer Discord logo" />
            <FA name="discord" style={{ backgroundColor: 'white' }} />
          </a>
          <a className="FooterBtn" href="https://www.facebook.com/COVIDResponseCollective/">
            <img className="Footer-Social" src={facebook_logo} alt="Footer Facebook logo" />
          </a>
          <a className="FooterBtn"
            href="https://www.instagram.com/covidresponsecollective/"
            target="_top"
            style={{ backgroundColor: '#CCCCCC', color: 'black' }}>
            <FA name="instagram fa-lg" className="Footer-Instagram" />
          </a>
          <a className="FooterBtn"
            href="https://www.linkedin.com/company/covidresponsecollective/"
            target="_top"
            style={{ backgroundColor: '#2867B2', color: 'white' }}>
            <FA name="linkedin fa-lg" className="Footer-LinkedIn" />
          </a>
          <a className="FooterBtn"
            href="mailto:team@covidresponsecollective.org"
            target="_top"
            style={{ backgroundColor: '#0077FF', color: 'white' }}>
            <FA name="envelope" className="Footer-Mail" />
          </a>
        </div>
        <div className="Footer-Version">
          {`©️2020, v${process.env.REACT_APP_VERSION}, made with ❤ by the CRC community`}
        </div>
      </div>
    );
  }
}

export default Footer;
