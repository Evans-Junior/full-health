import React from 'react'
import "./Home.css"
import ReactPlayer from "react-player"
import Doctor from './Doctor'
import Josh from "./assets/josh.jpg"
import Phil from "./assets/phil.jpg"
import Jeff from "./assets/jeff.jpg"
import Sam from "./assets/sam.jpg"

const name="Dr. Josh Tom"  
const Details="Has a dotorate as a Dentist.Had his doctorate degree in havard and has 15 year of experince on the job"
const name_a="Dr. Phil Botton"
const Details_a="Has a dotorate as a Dentist.Had his doctorate degree in havard and has 15 year of experince on the job"
const name_b="Dr. Sam Joseph"
const Details_b="Has a dotorate as a Dentist.Had his doctorate degree in havard and has 15 year of experince on the job"



 function Home() {
     const Info ='We give you direct access to doctors specialized in various health issues. Health care makes it possible to get access to consultations on health matters, with highly experienced doctors around the world.'
    return (
        <div className="home">
            <div className="container__home">
                <div className="flex">
                 <div className='first'>
                    <ReactPlayer url="https://www.youtube.com/watch?v=pORvET2575g" className="video"/>
                    <p className="container__about">
                    <h3>About</h3>
                    <h5>
                    <span className="bullet">&#8226;</span> Health  Care
                    </h5>
                    <h3> OBJECTIVE</h3>
                    <p>{Info}</p>
                    <button>Learn More</button>
                    </p>
                    </div>
                    <div>
                    <div className="flex_1">
                    <h6 className="doc">Doctors of the week</h6>
                    <p className="doc__flex">
                    <Doctor img={Josh} name={name} Details={Details}/>
                    <Doctor img={Phil} name={name_a} Details={Details_a}/>
                    <Doctor img={Sam} name={name_b} Details={Details_b}/>
                   <Doctor img={Jeff} name={name_b} Details={Details_b}/>
                   <Doctor img={Sam} name={name_b} Details={Details_b}/>
                    </p>
                    </div>
                    </div>
                </div> 
                <div className="week">
                
               
                </div>
                <div className="news">
                <Doctor />
                </div>
              
                 {/* <Slides/> */}
                    {/* <News/> */}
            </div>
        </div>
    )
}

export default Home;
