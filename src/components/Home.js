import React, { useState } from "react"
import { Link } from "react-scroll";
import { GrClose, GrMenu } from 'react-icons/gr'
import { BsDownload } from 'react-icons/bs'
import Typed from "react-typed"
import { MDBCollapse, MDBRow } from 'mdb-react-ui-kit';
import { BsWhatsapp, BsTelephone, BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
  const [isnavbarOpen, setNavbar] = useState(false)

  // getDownloadURL(ref(storage, 'CVs/EleazarCV.pdf'))
  // .then((url) => {
  //   console.log(url)
  //   const _link = document.getElementById('_cv');
  //   _link.setAttribute('href', url);
  // })
  // .catch((error) => {
  //   console.log(error)
  // });

  //skills
  const [showShow1, setShowShow1] = useState(true);
  const [showShow2, setShowShow2] = useState(false);
  const [showShow3, setShowShow3] = useState(false);
  const [showShow4, setShowShow4] = useState(false);
  const [showShow5, setShowShow5] = useState(false);

  const toggleShow1 = () => {
    setShowShow1(!showShow1);
    setShowShow2(false);
    setShowShow3(false);
    setShowShow4(false);
    setShowShow5(false);
  }
  const toggleShow2 = () => {
    setShowShow2(!showShow2);
    setShowShow1(false);
    setShowShow3(false);
    setShowShow4(false);
    setShowShow5(false);
  }
  const toggleShow3 = () => {
    setShowShow3(!showShow3);
    setShowShow1(false);
    setShowShow2(false);
    setShowShow4(false);
    setShowShow5(false);
  }
  const toggleShow4 = () => {
    setShowShow4(!showShow4);
    setShowShow1(false);
    setShowShow2(false);
    setShowShow3(false);
    setShowShow5(false);
  }
  const toggleShow5 = () => {
    setShowShow5(!showShow5);
    setShowShow1(false);
    setShowShow2(false);
    setShowShow3(false);
    setShowShow4(false);
  }

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
            <div className='aboutme'>
                  <div 
                        style={{
                          bottom: 'auto',
                          color: 'black',
                          fontWeight: '500',
                          textAlign: 'center',
                          verticalAlign: 'middle', 
                          padding: '10%'
                      }}>
                          <h3>WHO AM I ?</h3>
                          <p className='mystory'>Hi, I'm <b>Eleazar Simba</b>. 
                          I am a Full Stack Web Developer having a Bachelor's degree in Computer Science
                          from Pwani University, Kenya. I'm enthusiastic about problem solving 
                          through the use of core computer science principles of time and space com.</p>
                          <p className='mystory'>I have passion in the latest technologies, and inventions in the field of computing. I am flexible and ready to learn.</p>
                          <p className='mystory'>I love playing chess online and with friends.</p>
                        <Typed 
                          className='typedText'
                          strings={[
                                  "I'm a Full Stack Developer",
                                  "I love software development",
                              ]}
                            typeSpeed={110}
                            backSpeed={20}
                            loop
                          />
                  </div>
              </div>
        </div>

        <div id="skills">
            <div className='skills'>
              <h3>SKILLS</h3>
                <MDBRow onClick={toggleShow1} className='collapsethis'>
                  FRONTEND DEVELOPMENT
                </MDBRow>
                <MDBCollapse show={showShow1} className='showthis'>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React JS</li>
                    <li>jQuery</li> 
                  </ul>
                </MDBCollapse>

                <MDBRow onClick={toggleShow2} className='collapsethis'>
                  BACKEND DEVELOPMENT
                </MDBRow>
                <MDBCollapse show={showShow2} className='showthis'>
                  <ul> 
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>Knowledge of APIs</li> 
                  </ul>
                </MDBCollapse>

                <MDBRow onClick={toggleShow3} className='collapsethis'>
                  MOBILE DEVELOPMENT
                </MDBRow>
                <MDBCollapse show={showShow3} className='showthis'>
                  <ul> 
                    <li>React Native</li>
                  </ul>
                </MDBCollapse>

                <MDBRow onClick={toggleShow4} className='collapsethis'>
                  DATABASES
                </MDBRow>
                <MDBCollapse show={showShow4} className='showthis'>
                  <ul> 
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                  </ul>
                  
                </MDBCollapse>
                <MDBRow onClick={toggleShow5} className='collapsethis'>
                  DEVELOPMENT TOOLS
                </MDBRow>
                <MDBCollapse show={showShow5} className='showthis'>
                  <ul>
                    <li>Github</li>
                    <li>Netbeans</li>
                    <li>Postman</li>
                    <li>VS Code</li>
                  </ul>
                </MDBCollapse>
            </div>
        </div>

        <div id="projects">
            <div className='projects'>
              <h3>PROJECTS</h3>
              <div className="imagerow"> 
              <div className="imagecolumn" style={{marginLeft: '10px'}}>
                  <a href="https://nimble-yeot-0421ef.netlify.app/"> <img src="assets/phone-shop.png" alt='' width='100%' /></a>
                  <p>This project is about the selling of mobile phones which proceeds upto to payment with mpesa. Paybill number used is for safaricom daraja, 
                  so Don't use it</p>
                  <a href="https://github.com/Eleazarsimba/Cart-with-React-redux" style={{textDecoration:'none'}} id='github'>
                    <div className='viewgithub'>
                      <div>
                        <BsGithub size='30' color='black' style={{marginRight: '30px'}}/>
                      </div>
                      <div className='teldata'>
                        View code on Github
                      </div>
                    </div>
                  </a>
                </div>
                {/* end of second project */}
                <div className="imagecolumn" style={{marginLeft: '10px'}}>
                  <a href="https://creative-blini-ab1266.netlify.app/"> <img src="assets/lexo-fire.png" alt='' width='100%' /></a>
                  <p>This project is about management of employees, offers, products, 
                    adminstration and the sales of petroleum products at Lexo petrol station. 
                    Further guide in the repository.
                  </p>
                  <a href="https://github.com/Eleazarsimba/Lexo-react-with-firebase" style={{textDecoration:'none'}} id='github'>
                    <div className='viewgithub'>
                      <div>
                        <BsGithub size='30' color='black' style={{marginRight: '30px'}}/>
                      </div>
                      <div className='teldata'>
                        View code on Github
                      </div>
                    </div>
                  </a>
                </div>
                {/* end of second project */}
              
                <div className="imagecolumn" style={{marginLeft: '10px'}}>
                  <div style={{display: 'flex'}}> 
                    <img src="assets/ofisho.png" alt='' width='50%' />
                    <img src="assets/ofisho1.png" alt='' width='50%' />
                  </div>
                  <p>
                    To download the apk file for the android application click <a href="ofishoo-tips.apk" download>Here.</a><br/>
                    Admin credentials: 
                    email: admin@gmail.com, password: 
                    admin12
                  </p>
                  <a href="https://github.com/Eleazarsimba/betting_tips_react_native_app" style={{textDecoration:'none'}} id='github'>
                    <div className='viewgithub'>
                      <div>
                        <BsGithub size='30' color='black' style={{marginRight: '30px'}}/>
                      </div>
                      <div className='teldata'>
                        View code on Github
                      </div>
                    </div>
                  </a>
                </div>
                {/* end of third project */}
                
              </div>
            </div>
        </div>

        <div id="contactme">
            <div className='contactme'>
              <h3>CONTACT ME</h3>
              {/* telephone */}
              <a href="tel:0706083697" style={{textDecoration:'none'}} id='telephone'>
                <div className='telephone'>
                  <div>
                    <BsTelephone size='30' color='green' style={{marginRight: '30px'}}/>
                  </div>
                  <div className='teldata'>
                    Call me
                  </div>
                </div>
              </a>
              {/* whatsapp */}
              <a href="https://wa.me/254706083697" style={{textDecoration:'none'}} id='whatsapp'>
                <div className='whatsapp'>
                  <div>
                    <BsWhatsapp size='30' color='green' style={{marginRight: '30px'}}/>
                  </div>
                  <div className='teldata'>
                    Chat me
                  </div>
                </div>
              </a>
              {/* Email*/}
              <a href="mailto: eleazarsimba5@gmail.com" style={{textDecoration:'none'}} id='mail'>
                <div className='mail'>
                  <div>
                    <img 
                      src="email-logo.png" width='90px' height='32px'
                      alt=""
                      size='10'
                    />
                  </div>
                </div>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/eleazar-simba-3bb331166/" style={{textDecoration:'none'}} id='linkin'>
                <div className='linkin'>
                  <div>
                    <BsLinkedin size='30' color='blue' style={{marginRight: '30px'}}/>
                  </div>
                  <div className='teldata'>
                    Visit
                  </div>
                </div>
              </a>
              {/* Github */}
              <a href="https://github.com/Eleazarsimba" style={{textDecoration:'none'}} id='github'>
                <div className='github'>
                  <div>
                    <BsGithub size='30' color='black' style={{marginRight: '30px'}}/>
                  </div>
                  <div className='teldata'>
                    Visit
                  </div>
                </div>
              </a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Home