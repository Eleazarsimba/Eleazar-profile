import React, { useState } from 'react'
import { MDBCollapse, MDBRow } from 'mdb-react-ui-kit';

const Skills = () => {
  const [showShow1, setShowShow1] = useState(false);
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
  )
}

export default Skills