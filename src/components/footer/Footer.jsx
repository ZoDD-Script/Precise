import React from 'react'
import { socialMedia } from '../../constants'
import { logo } from '../../assets'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="row">
        <div className="col">
          <img src={logo} alt="" className='logo' />
          <p>We take pride in offering a comprehensive selection of products designed to cater to all your housing requirements, leaving no stone unturned in our pursuit to provide you with the perfect housing solution for every setting.</p>
        </div>
        <div className="col">
          <h3>Office <div className="underline"><span></span></div></h3>
          <p>15A Emma Abimbola Cole</p>
          <p>Lekki Phase 1</p>
          <p>Lagos, Nigeria</p>
          <p className="email_id">sales@preciselighting.com</p>
          <h4>+234 - 9037944292</h4>
        </div>
        <div className="col">
          <h3>Links <div className="underline"><span></span></div></h3>
          <ul>
            <li><Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link className="nav-link" to="our-mission" smooth={true} duration={500}>Our mission</Link></li>
            <li><Link className="nav-link" to="what-we-do" smooth={true} duration={500}>What we do</Link></li>
            <li><Link className="nav-link" to="our-solutions" smooth={true} duration={500}>Our solutions</Link></li>
            <li><Link className="nav-link" to="our-work" smooth={true} duration={500}>Our work</Link></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter <div className="underline"><span></span></div></h3>
          <form action="">
            <input type="email" placeholder='Enter your email id' required />
          </form>
          <div className="social_icons">
            {socialMedia.map((social, index) => (
              <img key={social.id} src={social.icon} alt={social.id} className='' />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <p className='copyright'>2024 © Precise - All Rights Reserved</p>
    </div>
  )
}

export default Footer