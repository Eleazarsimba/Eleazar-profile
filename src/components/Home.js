import React, { useState } from "react"
import { Link } from "react-scroll";
import $ from 'jquery';
import { GrClose, GrMenu } from 'react-icons/gr'
import { BsDownload } from 'react-icons/bs'
import Aboutme from "./Aboutme";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contactme from "./Pages/Contactme";

import { storage } from "../firebase-config"
import { ref, getDownloadURL } from "firebase/storage";

const Home = () => {
  const [navbarOpen, setNavbarOpen] = useState(true)
  const [navbarClosed, setNavbarClosed] = useState(true)

  $(window).bind('resize', function(e)
  {
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function()
    {
      this.location.reload(false); /* false to get page from cache */
    }, 100);
  });
  // toggle menu
  const closeMenu = () => {
    setNavbarOpen(false)
    setNavbarClosed(true)
    $('.profileMenu').css({'display': 'none'});
    $('.profileBody').css({'left': 0, 'width': '100%'});
    $('.hamburgerMenu').css({'display': 'block', 'cursor': 'pointer'});
  }
  const openMenu = () => {
    setNavbarOpen(true)
    setNavbarClosed(false)

    // if big screen
    if($(window).width() >= 700) {
      $('.closeIcon').css({'display': 'none'});
      $('.hamburgerMenu').css({'display': 'none'});
    }
    // if smaller
    else{
      $('.closeIcon').css({'display': 'block', 'cursor': 'pointer'});
      $('.profileMenu').css({'display': 'block'});
      $('.profileBody').css({'left': '50%', 'position': 'relative', 'margin-top': '20px', 'width': 'calc(100vw - 50%)'});
    }
  }

  getDownloadURL(ref(storage, 'CVs/EleazarCV.pdf'))
  .then((url) => {
    console.log(url)
    const _link = document.getElementById('_cv');
    _link.setAttribute('href', url);
  })
  .catch((error) => {
    console.log(error)
  });

  return (
    <div className='appBody'>
      <div className='profileMenu'>
        <img src="profilep.jpg" alt="Add profile" width="130px" height="130px"/>
        <h3>Eleazar Simba</h3>
        <p>System Developer in KENYA</p>
        <ul>
          <li>
              <Link activeClass="active" smooth spy to="aboutme">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skills">
                SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contactme">
                CONTACT
              </Link>
            </li>
        </ul>
        <div className='closeIcon' onClick={closeMenu}>
          {navbarOpen ? <GrClose size='23'/> : ""}
        </div>
        <div className="downloadcv">
          <a
            href="EleazarCV.pdf"
            id="_cv"
            download
          >
            DOWNLOAD CV <BsDownload />
          </a>
        </div>
        <div className="copyright">&copy; 2022, Eleazar</div>
      </div>
      <div className='hamburgerMenu' onClick={openMenu}>
          {navbarClosed ? <GrMenu size='30'/> : ""}
      </div>
      <div className='profileBody'>
        <div id="aboutme">
          <Aboutme />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contactme">
          <Contactme />
        </div>
      </div>
    </div>
  )
}

export default Home