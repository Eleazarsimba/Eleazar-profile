import React, { useState, useEffect } from 'react'
import { MDBCollapse, MDBRow } from 'mdb-react-ui-kit';
import { db } from "../../firebase-config"
import {collection, getDocs} from "firebase/firestore"

const Skills = () => {
  const [showShow1, setShowShow1] = useState(false);
  const [showShow2, setShowShow2] = useState(false);
  const [showShow3, setShowShow3] = useState(false);
  const [showShow4, setShowShow4] = useState(false);
  const [showShow5, setShowShow5] = useState(false);

  const [myfrontskills, setfrontskill] = useState([]);
  const [mybackskills, setbackskill] = useState([]);
  const [mydbskills, setdbskill] = useState([]);
  const [mymobskills, setmobskill] = useState([]);
  const [mytools, settools] = useState([]);

  const t_frontend = collection(db, "frontend");
  const t_backend = collection(db, "backend");
  const t_db = collection(db, "databases");
  const t_mob = collection(db, "mobile");
  const t_tool = collection(db, "developertools");

  useEffect(() => {
    const myFrontend = async () =>{
        const data = await getDocs(t_frontend);
        setfrontskill(data.docs.map((doc) => ({ ...doc.data(),id: doc.id })))
    }
    myFrontend();
    }, [t_frontend])

  useEffect(() => {
    const myBackend = async () =>{
        const data = await getDocs(t_backend);
        setbackskill(data.docs.map((doc) => ({ ...doc.data(),id: doc.id })))
    }
    myBackend();
    }, [t_backend])

  useEffect(() => {
    const myDbSkill = async () =>{
        const data = await getDocs(t_db);
        setdbskill(data.docs.map((doc) => ({ ...doc.data(),id: doc.id })))
    }
    myDbSkill();
    }, [t_db])

  useEffect(() => {
    const myMob = async () =>{
        const data = await getDocs(t_mob);
        setmobskill(data.docs.map((doc) => ({ ...doc.data(),id: doc.id })))
    }
    myMob();
    }, [t_mob])

  useEffect(() => {
    const myTools = async () =>{
        const data = await getDocs(t_tool);
        settools(data.docs.map((doc) => ({ ...doc.data(),id: doc.id })))
    }
    myTools();
    }, [t_tool])

  const toggleShow1 = () => {
    setShowShow1(!showShow1);
    setShowShow2(false);
    setShowShow3(false);
    setShowShow4(false);
    setShowShow5(false);
  }
  const toggleShow2 = () => {
    setShowShow2(!showShow2);
    setShowShow1(false);
    setShowShow3(false);
    setShowShow4(false);
    setShowShow5(false);
  }
  const toggleShow3 = () => {
    setShowShow3(!showShow3);
    setShowShow1(false);
    setShowShow2(false);
    setShowShow4(false);
    setShowShow5(false);
  }
  const toggleShow4 = () => {
    setShowShow4(!showShow4);
    setShowShow1(false);
    setShowShow2(false);
    setShowShow3(false);
    setShowShow5(false);
  }
  const toggleShow5 = () => {
    setShowShow5(!showShow5);
    setShowShow1(false);
    setShowShow2(false);
    setShowShow3(false);
    setShowShow4(false);
  }
  return (
    <div className='skills'>
      <h3>SKILLS</h3>
        <MDBRow onClick={toggleShow1} className='collapsethis'>
          FRONTEND DEVELOPMENT
        </MDBRow>
        <MDBCollapse show={showShow1} className='showthis'>
          <ul>
            {myfrontskills.map(myfrontskill => {   
                return(
                    <li key={myfrontskill.skill}>
                        {myfrontskill.skill}
                    </li>
                );
            })} 
          </ul>
        </MDBCollapse>

        <MDBRow onClick={toggleShow2} className='collapsethis'>
          BACKEND DEVELOPMENT
        </MDBRow>
        <MDBCollapse show={showShow2} className='showthis'>
          <ul> 
            {mybackskills.map(mybackskill => {   
                return(
                    <li key={mybackskill.skill}>
                        {mybackskill.skill}
                    </li>
                );
            })} 
          </ul>
        </MDBCollapse>

        <MDBRow onClick={toggleShow3} className='collapsethis'>
          MOBILE DEVELOPMENT
        </MDBRow>
        <MDBCollapse show={showShow3} className='showthis'>
          <ul> 
            {mymobskills.map(mymobskill => {   
                return(
                    <li key={mymobskill.skill}>
                        {mymobskill.skill}
                    </li>
                );
            })} 
          </ul>
        </MDBCollapse>

        <MDBRow onClick={toggleShow4} className='collapsethis'>
          DATABASES
        </MDBRow>
        <MDBCollapse show={showShow4} className='showthis'>
          <ul> 
            {mydbskills.map(mydbskill => {   
                return(
                    <li key={mydbskill.skill}>
                        {mydbskill.skill}
                    </li>
                );
            })} 
          </ul>
          
        </MDBCollapse>
        <MDBRow onClick={toggleShow5} className='collapsethis'>
          DEVELOPMENT TOOLS
        </MDBRow>
        <MDBCollapse show={showShow5} className='showthis'>
          <ul>
            {mytools.map(mytool => {   
                return(
                    <li key={mytool.tool}>
                        {mytool.tool}
                    </li>
                );
            })} 
          </ul>
        </MDBCollapse>
    </div>
  )
}

export default Skills