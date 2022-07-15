import React, {useState} from 'react'
import { MDBCollapse, MDBRow } from 'mdb-react-ui-kit';

const Education = () => {
  const [showShow1, setShowShow1] = useState(true);
  const [showShow2, setShowShow2] = useState(false);

  const toggleShow1 = () => {
    setShowShow1(!showShow1);
    setShowShow2(false);
  }
  const toggleShow2 = () => {
    setShowShow2(!showShow2);
    setShowShow1(false);
  }

  return (
    <div className='education'>
      <h3>EDUCATION</h3>
        <MDBRow onClick={toggleShow1} className='collapsethis'>
          BACHELOR OF SCIENCE IN COMPUTER SCIENCE
        </MDBRow>
        <MDBCollapse show={showShow1} className='showthis' style={{fontSize: '20px'}}>
          I obtained a bachelor's degree in Computer Science from Pwani University, Kenya with Second Class Honours, Lower Division on 26<sup>th</sup> May 2022.
        </MDBCollapse>

        <MDBRow onClick={toggleShow2} className='collapsethis'>
          KENYA CERTIFICATE OF SECONDARY EDUCATION
        </MDBRow>
        <MDBCollapse show={showShow2} className='showthis' style={{fontSize: '20px'}}>
          I studied my secondary school education in Matinyani Secondary School, Kitui where I completed my studies in 2016 and obtained a B+ of 70 points
        </MDBCollapse>
    </div>
  )
}

export default Education