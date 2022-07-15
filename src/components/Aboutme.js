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
  
  //Years in coding
  //Age
  var cod = new Date("2019");
  var codingAge = Date.now() - cod.getTime();
  //convert the calculated difference in date format  
  var age_code = new Date(codingAge); 
  //extract year from date      
  var yearcode = age_code.getUTCFullYear(); 
  var tcode = Math.abs(yearcode - 1970);
  return (
    <div className='aboutme'>
    <Carousel>
      <Carousel.Item >
          <img 
             style={{
              objectFit:'cover',
              top: 0,
              left: 0,
              minHeight: '500px'
            }}
            src="eleazar2.png"
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
                <p>Hi, i'm <b>Eleazar Simba</b> aged {age} years and comes from the lower Eastern Kenya. 
                I am a full stack web developer having a bachelor's degree in Computer Science
                from Pwani University, Kenya. I have been in the technology industry for {tcode} years.</p>
                <p>I have passion in the latest technologies and inventions in the field of computing. I am flexible and ready to learn.</p>
                <p>I love playing chess online and with friends, swimming, and watching cartoons.</p>
              <Typed style={{
                color: 'black',
                fontWeight: 500,
                fontSize:'22px',
              }}
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