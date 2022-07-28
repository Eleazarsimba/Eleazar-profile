import React from 'react'
import Typed from "react-typed"

const Aboutme = () => {
  //Age
  var dob = new Date("03/13/1999");
  //calculate month difference from current date in time  
  var month_diff = Date.now() - dob.getTime();       
  //convert the calculated difference in date format  
  var age_dt = new Date(month_diff);   
  //extract year from date      
  var year = age_dt.getUTCFullYear();  
  //now calculate the age of the user  
  var age = Math.abs(year - 1970);
  
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
                <p className='mystory'>Hi, I'm <b>Eleazar Simba</b> aged {age} years. 
                I am a full stack web developer having a bachelor's degree in Computer Science
                from Pwani University, Kenya. </p>
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