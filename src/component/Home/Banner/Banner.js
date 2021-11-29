import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typical from 'react-typical'
import resume from '../../../Items/Resume (1).pdf'
import img from '../../../Items/241996903_934513090432534_4163768899699016283_n.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div >
           
        <Container>
  <Row className="banner-container">
    <Col style={{marginTop:"100px",marginBottom:"100px"}}>
    <div className="details-name">
            <span style={{
                color:"whitesmoke"
            }}>{" "}
            Hello, I'M <span className="helight-text" >SABBIR</span>
            </span>
           </div>
           <div className="details-role">
            <span className="primary-text">
            {" "}
            <h1 style={{color:"cyan"}}>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                    
                    "Full Stack Developer  👩‍💻",
                    1000,
                    "MERN Stack Developer 👨‍💻",
                    1000,
                    "Course Programming Hero ",
                    1000,
                    "React Developer ✌🏽",
                    1000
                   
                ]}
                />
            </h1>
            <span style={{color:'white'}}>
                Knock of building application with front-end operations
            </span>
            </span>
           </div>
           <div className="profile-options">
                <button className="hire-btn">
                Hire Me
                </button>
                <a href={resume } download={resume} >
                    <button className="resume-btn">Get Resume</button>
                </a>
           </div>
    </Col>
    <Col>
                <img src={img} style={{
                    height:"300px",
                    width:"320px",
                    borderRadius:"100px"
                }} alt="" />
    </Col>
  </Row>
  
</Container>
          
        </div>
    );
};

export default Banner;