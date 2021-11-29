import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img2 from "../../Items/img2.jpg"



const About = () => {
    return (
        <div>
            <Container>
  <Row>
    <Col>
    <img src={img2} style={{
                    height:"300px",
                    width:"320px",
                    borderRadius:"100px"
                }} alt="" />
    </Col>

    <Col>
     <div><h2>Hellow , I'm a front-end developer from dhaka bangladesh . I am a HSC student in 2021.A technically savery web developer. Who has a multiple month of website design expertise behind her.Maxine can be a strong driving force for improving the performance, scalability and reliability of development projects .</h2>
            </div>
            <div style={{marginTop:"20px", color:"goldenrod"}}>
                <h2>My skills</h2>
                HTML, CSS, Bootstrap,Javascript , ES6,React, ReactRouter, Rest API,
                Firebase-Authentication , Node js, Express.js,MongoDB
            </div>
            </Col>
  </Row>
  
</Container>
           
        </div>
    );
};

export default About;