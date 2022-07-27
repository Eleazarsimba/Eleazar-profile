import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
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
    <Carousel controls={false}>
      <Carousel.Item className='carouselImg'>
          <img 
            src="eleazar2.jpg"
            alt="First slide"
            />
            <Carousel.Caption 
              style={{
                top: '200px',
                bottom: 'auto',
                color: 'black',
                fontWeight: '500'
            }}>
                <h3>WHO AM I ?</h3>
                <p className='mystory'>Hi, I'm <b>Eleazar Simba</b> aged {age} years. 
                I am a full stack web developer having a bachelor's degree in Computer Science
                from Pwani University, Kenya. </p>
                <p className='extrainfo'>I have passion in the latest technologies, and inventions in the field of computing. I am flexible and ready to learn.</p>
                <p className='extrainfo'>I love playing chess online and with friends.</p>
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
              </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Aboutme