import React from "react";
import { useParams } from "react-router";
import "./projectCardDetails.css";
import projectDetailes from "../project-carc-detailes";

const ProjectCardDetails = () => {
    const { id } = useParams();
    const projectKey = `project${id}`;
    const project = projectDetailes[projectKey];

    if (!project) {
        return <h2 className="text-center text-white mt-5">Project not found</h2>;
    }

    return (
        <div className="projectCardDetailes">
            <div className="container">
                <div className="dteiles-banner">
                    <h1 className="detailes-title">{project.title}</h1>
                    <img src={project.img} alt={project.title} className="w-100 mb-4" />
                </div>
                <div className="detailsContent d-flex flex-wrap">
                    <div className="col-7 detailes-data mb-5">
                        <h2 className="inerTitle">Challenge :</h2>
                        <p className="inerDesc">{project.desc1}</p>
                    </div>
                    <div className="col-7 detailes-data mb-5 ms-auto me-0">
                        <h2 className="inerTitle">Solution :</h2>
                        <p className="inerDesc">{project.desc2}</p>
                    </div>
                    <div className="col-7 detailes-data">
                        <h2 className="inerTitle">Result :</h2>
                        <p className="inerDesc">{project.desc3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardDetails;
