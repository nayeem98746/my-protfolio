import React, { useEffect, useState } from 'react';
import Project from '../../Project/Project';
// import { Col, Container, Row } from 'react-bootstrap';


const Projects = () => {

    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
       
    },[])
     
    

    return (
        <div style={{marginTop:"50px"}}> 
            <div className="row">
            <h2 className="text-primary"> MY PROJECTS</h2>
            <div className="service-container  ">
                {
                    projects.map(project => <Project
                    key={project.id}
                    project={project}
                    ></Project>)
                }
            
            </div>
            
        </div>
        </div>
    );
};

export default Projects;