import React, {useState} from 'react'
import { MDBCollapse, MDBRow } from 'mdb-react-ui-kit';

const Skills = () => {
  const [showShow1, setShowShow1] = useState(true);
  const [showShow2, setShowShow2] = useState(false);
  const [showShow3, setShowShow3] = useState(false);
  const [showShow4, setShowShow4] = useState(false);

  const toggleShow1 = () => {
    setShowShow1(!showShow1);
    setShowShow2(false);
    setShowShow3(false);
    setShowShow4(false);
  }
  const toggleShow2 = () => {
    setShowShow2(!showShow2);
    setShowShow1(false);
    setShowShow3(false);
    setShowShow4(false);
  }
  const toggleShow3 = () => {
    setShowShow3(!showShow3);
    setShowShow1(false);
    setShowShow2(false);
    setShowShow4(false);
  }
  const toggleShow4 = () => {
    setShowShow4(!showShow4);
    setShowShow1(false);
    setShowShow2(false);
    setShowShow3(false);
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
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React JS</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
          </ul>
        </MDBCollapse>

        <MDBRow onClick={toggleShow2} className='collapsethis'>
          BACKEND DEVELOPMENT
        </MDBRow>
        <MDBCollapse show={showShow2} className='showthis'>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React JS</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
          </ul>
        </MDBCollapse>

        <MDBRow onClick={toggleShow3} className='collapsethis'>
          MOBILE DEVELOPMENT
        </MDBRow>
        <MDBCollapse show={showShow3} className='showthis'>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React JS</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
          </ul>
        </MDBCollapse>

        <MDBRow onClick={toggleShow4} className='collapsethis'>
          DATABASES
        </MDBRow>
        <MDBCollapse show={showShow4} className='showthis'>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React JS</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
          </ul>
        </MDBCollapse>
    </div>
  )
}

export default Skills