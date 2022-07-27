import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Projects = () => {
  return (
    <div className='projects'>
      <h3>PROJECTS</h3>
      <div className="imagerow"> 
        <div className="imagecolumn">
          <a href="https://creative-blini-ab1266.netlify.app/"> <img src="lexo-fire.png" alt='' width='100%' /></a>
          <p>This project is about management of employees, 
            adminstration and the sales of petroleum products at Lexo petrol station. 
            A database admin has to register an admin who can thereafter register other 
            admins and employees to the system. A default password is provided to 
            the registered system users which they therefore change.
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
        {/* end of first project */}
      
        <div className="imagecolumn">
          <a href="https://github.com/Eleazarsimba/Swagger-documentation-for-my-APIs"> <img src="swagger-doc.png" alt='' width='100%' /></a>
          <p>
            This is the swagger documentation for all the APIs used in the Lexo petrol station project 
            <a href="https://github.com/Eleazarsimba/Lexo-react-frontend"> Lexo frontend</a>
          </p>
          <p>
            The project when cloned runs on port 3002 and used a mySQL database that can be downloaded from the file attached in   
            <a href="https://github.com/Eleazarsimba/Lexo-react-backend"> Lexo backend</a>. Once downloaded it is imported.
          </p>
          <a href="https://github.com/Eleazarsimba/Swagger-documentation-for-my-APIs" style={{textDecoration:'none'}} id='github'>
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
      </div>
    </div>
  )
}

export default Projects