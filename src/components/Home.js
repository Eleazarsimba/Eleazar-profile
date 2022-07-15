import React, { useState } from "react"
import $ from 'jquery';
import { GrClose, GrMenu } from 'react-icons/gr'
import Aboutme from "./Aboutme";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contactme from "./Pages/Contactme";

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
  return (
    <div className='appBody'>
      <div className='profileMenu'>
        <img src="profilep.jpg" alt="Add profile" width="130px" height="130px"/>
        <h3>Eleazar Simba</h3>
        <p>System Developer in KENYA</p>
        <ul>
          <li>ABOUT</li>
          <li>SKILLS</li>
          <li>EDUCATION</li>
          <li>EXPERIENCE</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
        <div className='closeIcon' onClick={closeMenu}>
          {navbarOpen ? <GrClose size='23'/> : ""}
        </div>
        <div className="copyright">&copy; 2022, Eleazar</div>
      </div>
      <div className='hamburgerMenu' onClick={openMenu}>
          {navbarClosed ? <GrMenu size='30'/> : ""}
      </div>
      <div className='profileBody'>
        <Aboutme />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contactme />
      </div>
    </div>
  )
}

export default Home