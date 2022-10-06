import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter} from 'react-icons/fa'

import './footerstyles.css'

function Footer() {
  return (
    <div name='footer' className='footer'>
    <div className="container">
        <div className="top">
            <h3>TRIPPER.</h3>
            <div className="social">
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaLinkedin className='icon' />
            <FaPinterest className='icon' />
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <ul>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>News Room</li>
                    <li>Advertisments</li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer