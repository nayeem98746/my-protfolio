import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
    return (
        <div style={{marginTop:"50px"}}> 
            <h1 style={{borderBottom:"2px solid gray"}} >MY PEOJECTS</h1>
            <Container>
  <Row>
    <Col>
    <h2>Projects link</h2>
    <a href="https://niche-webside.web.app/home"  >
                    <button className="resume-btn">Live Link</button>
                </a> <br /><br />
    <a href="https://github.com/nayeem98746/kawasiki-bike-client"  >
                    <button className="resume-btn">Client code Link</button>
                </a><br /><br />
    <a href="https://github.com/nayeem98746/kawasiki-bike-server"  >
                    <button className="resume-btn">Server code Link</button>
                </a>
    
    </Col>
    <Col>
    <h3>Projects description</h3>
    <ul>
        <li>This project is bike sales. It is a MERN stack project . It has an admin panel page</li>
        <li>Users can log in to this site.The user can show his order the bike and purchase the
            bike</li>
        <li>Admin dashboard functionality to add products to delete products , cancel order and
      make a user admin</li>
       
    </ul>
    </Col>
  </Row>
  
</Container>
        </div>
    );
};

export default Projects;