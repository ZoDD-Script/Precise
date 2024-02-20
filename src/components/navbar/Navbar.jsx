import React, { useEffect, useState } from 'react'
import { logo } from '../../assets'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navBarColor, setNavBarColor] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 30) {
        setNavBarColor(true);
      } else {
        setNavBarColor(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <div className="loader bg-dark">
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      {/* <div id="top"></div> */}

      <nav className={navBarColor ? "site-navbar site-navbar-transparent navbar navbar-expand-lg navbar-dark fixed-top bg-white shadow-light p-lg-4 activeColor" : "site-navbar site-navbar-transparent navbar navbar-expand-lg navbar-dark fixed-top bg-white shadow-light p-lg-4"} data-navbar-base="navbar-dark" data-navbar-toggled="navbar-light" data-navbar-scrolled="navbar-light">

        {/* <!-- Brand --> */}
        <a className="navbar-brand" href="#">
          <img src={logo} className="" alt="" width={150} />
        </a>

        {/* <!-- Toggler --> */}
        <button className="navbar-toggler-alternative" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-alternative-icon"></span>
        </button>

        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">

          {/* <!-- Navigation --> */}
          <ul className="navbar-nav ml-auto" id="navigation">
            <li className="nav-item active" data-menuanchor="home">
              <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="nav-item" data-menuanchor="our-mission">
              <Link className="nav-link" to="our-mission" smooth={true} duration={500}>Our mission</Link>
            </li>
            <li className="nav-item" data-menuanchor="what-we-do">
              <Link className="nav-link" to="what-we-do" smooth={true} duration={500}>What we do</Link>
            </li>
            <li className="nav-item" data-menuanchor="our-solutions">
              <Link className="nav-link" to="our-solutions" smooth={true} duration={500}>Our solutions</Link>
            </li>
            <li className="nav-item" data-menuanchor="our-work">
              <Link className="nav-link" to="our-work" smooth={true} duration={500}>Our work</Link>
            </li>
            {/* <li className="nav-item" data-menuanchor="contact">
              <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
            </li> */}
          </ul>

          {/* <!-- Button --> */}
          <button type="button" className="btn btn-primary d-block d-lg-inline-block ml-lg-3" data-toggle="modal" data-target="#documentationModal" data-on-navbar-light="btn-soft-secondary" data-on-navbar-dark="btn-soft-white">Profile</button>

          {/* <!-- Button --> */}
          {/* <a className="btn btn-primary d-block d-lg-inline-block ml-lg-3" href="!#">Buy now</a> */}

        </div>
      </nav>

      <a href="#top" className="backtotop">
      <span>Back To Top</span>
      <i className="fas fa-angle-up"></i>
      </a>

      {/* <div className="scroll-progress">
        <div className="sp-left">
          <div className="sp-inner"></div>
          <div className="sp-inner progress"></div>
        </div>
        <div className="sp-right">
          <div className="sp-inner"></div>
          <div className="sp-inner progress"></div>
        </div>
      </div> */}
    </div>
  )
}

export default Navbar