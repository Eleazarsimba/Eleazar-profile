import React, { useState } from "react"
import { Link } from "react-scroll";
import { GrClose, GrMenu } from 'react-icons/gr'
import { BsDownload } from 'react-icons/bs'
import Aboutme from "./Aboutme";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contactme from "./Pages/Contactme";

import { storage } from "../firebase-config"
import { ref, getDownloadURL } from "firebase/storage";

const Home = () => {
  const [isnavbarOpen, setNavbar] = useState(false)

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
      <div className={
          isnavbarOpen ? "profileMenu expanded" : "profileMenu"
        }>
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
      <div className='hamburgerMenu' 
        onClick={() => {
          setNavbar(!isnavbarOpen)
        }}
        >
          {isnavbarOpen ? <GrClose size='23'/> : <GrMenu size='30'/>}
      </div>

      <div className={
          isnavbarOpen ? "profileBody expanded" : "profileBody"
        }>
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