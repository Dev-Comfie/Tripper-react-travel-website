// check for comments 
import React, { useState } from 'react'
import { BiSearch} from 'react-icons/bi'
import { BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter} from 'react-icons/fa'
import {Link} from 'react-scroll'





import './navbarstyles.css'

// using use state hook for the functionality of the mobile nav bar


function Navbar() {

const [nav, setNav] = useState(false)
const handleNav = () => setNav(!nav)

  return (
    <div name='home' className={nav ? "navbar navbar-bg" : "navbar"}>
    <div className= {nav ? 'logo dark' : 'logo'}>
        <h2>TRIPPER.</h2>
    </div>
    <ul className='nav-menu'>
        <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
        <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
        <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
        <Link to='book'smooth={true} duration={500}><li>Books</li></Link>
        <Link to='views'smooth={true} duration={500}><li>View</li></Link>
    </ul>
    <div className='nav-icons'>
        <Link to='' smooth={true} duration={500}><BiSearch className='icon' style={{marginRight: "1rem"}}/></Link>
        <Link to='footer' smooth={true} duration={500}><BsPerson className='icon'/></Link>
    </div>
      <div className='hamburger' onClick={handleNav}>
        {!nav ? (<HiOutlineMenuAlt4 className ="icon"/>) : (<AiOutlineClose style={{color: 'black'}} className='icon' />)}
      </div>


{/* Mobile Menu */}

    <div className={nav ? "mobile-menu active" : "mobile-menu"}>
      <ul className='mobile-nav'>
      <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
        <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
        <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
        <Link to='book'smooth={true} duration={500}><li>Books</li></Link>
        <Link to='views'smooth={true} duration={500}><li>View</li></Link>
      </ul>
      <div className='mobile-menu-button'>
        <div className='menu-icons'>
         <button>Search</button>
         <button>Account</button>

        </div>

        {/* To auto import, use ctrl space bar */}
        <div className='social-icons'>
          <FaFacebook className='icon' />
          <FaTwitter className='icon' />
          <FaInstagram className='icon' />
          <FaLinkedin className='icon' />
          <FaPinterest className='icon' />
        </div>
      </div>
      </div>

    </div>
    
  )
}

export default Navbar;













