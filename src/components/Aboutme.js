import React from 'react'
import Typed from "react-typed"

const Aboutme = () => {  
  return (
    <div className='aboutme'>
    <div>
      <div className='carouselImg' 
        style={{ 
          backgroundImage: "url(https://eleazarsimba.github.io/Eleazar-profile/eleazar2.jpg)", 
          backgroundRepeat: 'no-repeat' 
          }}>
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
                I am a full stack web developer having a bachelor's degree in Computer Science
                from Pwani University, Kenya. I am enthusiastic about problem solving 
                through the use of core computer science principles of time and space com.</p>
                <p>I have passion in the latest technologies, and inventions in the field of computing. I am flexible and ready to learn.</p>
                <p>I love playing chess online and with friends.</p>
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
    </div>
  )
}

export default Aboutme