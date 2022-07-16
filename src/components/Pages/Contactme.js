import React from 'react'
import { BsWhatsapp, BsTelephone, BsGithub, BsLinkedin } from 'react-icons/bs'

const Contactme = () => {
  return (
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
  )
}

export default Contactme