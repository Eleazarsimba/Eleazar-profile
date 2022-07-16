import React, { useState, useEffect } from 'react'
import { db } from "../../firebase-config"
import {collection, getDocs} from "firebase/firestore"

const Experience = () => {
  const [myexperiences, setexperience] = useState([]);

  const t_experience = collection(db, "experience");
  useEffect(() => {
    const myExperience = async () =>{
        const data = await getDocs(t_experience);
        setexperience(data.docs.map((doc) => ({ ...doc.data(),id: doc.id })))
    }
    myExperience();
    }, [t_experience])

    const numDescending = [...myexperiences].sort((a, b) => b.exp_id - a.exp_id);
  return (
    <div className='experience'>
      <h3>EXPERIENCE</h3>
      <div>
        {numDescending
        .map(myexperience => {   
                return(
                  <div key={myexperience.duties} className='myexper'>
                    <h5>{myexperience.title}</h5>
                    <h6>{myexperience.from} - {myexperience.to}</h6>
                    <p>{myexperience.area}</p>
                      <ul>
                        <li>{myexperience.duties}</li>
                      </ul> 
                  </div>
                );
            })} 
      </div>
    </div>
  )
}

export default Experience