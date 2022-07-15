import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Projects = () => {
  return (
    <div className='projects'>
      <h3>PROJECTS</h3>
      <MDBRow>
      <MDBCol lg='4' md='12' sm='6' xsm='6' className='mb-4'>
        <img 
          src='https://mdbootstrap.com/img/new/standard/city/047.webp' 
          className='img-fluid' 
          alt='' 
        />
      </MDBCol>

      <MDBCol lg='4' md='6' sm='6' xsm='6' className='mb-4'>
        <img
          src='https://mdbootstrap.com/img/new/standard/city/047.webp'
          className='img-fluid'
          alt=''
        />
      </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Projects