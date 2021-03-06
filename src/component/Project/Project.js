import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {id, name, img} = project
    return (
        <div className="service pb-3  ">
        <img width="300px" src={img} alt="" />
        <h3>{name}</h3>
        <Link to={`/information/${id}`} ><button className="btn-class">information{name.toLowerCase()} </button></Link>
    </div>
    );
};

export default Project;