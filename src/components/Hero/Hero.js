import React from 'react'
import './herostyle.css'

import Video from '../../assets/maldivesVideo.mp4'
import { AiOutlineSearch } from 'react-icons/ai';

function Hero() {
  return (
    <div name='hero' className='hero'>
        <video autoPlay loop muted id='video'>
          <source src={Video} type ='video/mp4'/>
        </video>
        <div className='overlay'></div>
        <div className='content'>
          <h1>First Class Travel</h1>
          <h2>Top 1% Locations WorldWide</h2>
          <form className='form'>
            <div>
              <input type= 'text' placeholder='Search Destination' />
            </div>
            <button><AiOutlineSearch className='icon'/></button>
          </form>
        </div>
    </div>
  )
}

export default Hero;