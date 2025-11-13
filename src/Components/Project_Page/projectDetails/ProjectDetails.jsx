import React from "react";
import "./ProjectDetails.css";
import ProjectCard from "../projectCard/ProjectCard";
import projectDetailes from "../project-carc-detailes";

const ProjectDetails = () => {
    const allProjects = Object.values(projectDetailes);

    const firstBatch = allProjects.slice(0, 4);
    const secondBatch = allProjects.slice(4, 8);
    const thiredBatch = allProjects.slice(8, 16);
    const fourthBatch = allProjects.slice(16, 22);

    return (
        <div className="project-details">
            <div className="container">
                <h1 className="project-details__title mb-3">Our Work Speaks For Itself :</h1>
                <p className="project-details__desc mb-5">
                    Explore our project portfolio to see the impact Solect’s solar solutions, energy storage,
                    and optimization services can have for companies and organizations like yours.
                </p>
                <div className="batch">
                    <h2 className="text-center mb-5  batch-title">Athletic Facilities :</h2>
                    <ProjectCard projects={firstBatch} />
                </div>
                <div className="batch">
                    <h2 className="text-center mb-5  batch-title">Automotive :</h2>
                    <ProjectCard projects={secondBatch} />
                </div>
                <div className="batch">
                    <h2 className="text-center mb-5  batch-title">Cummorcial & Industrial :</h2>
                    <ProjectCard projects={thiredBatch} />
                </div>
                <div className="batch">
                    <h2 className="text-center mb-5  batch-title">Commercial Real Estate :</h2>
                    <ProjectCard projects={fourthBatch} />
                </div>
                {/*<div className="batch">
             <h2 className="text-center mb-5  batch-title">Automotive :</h2>
             <ProjectCard projects={fifthBatch} />
         </div>
         <div className="batch">
             <h2 className="text-center mb-5  batch-title">Automotive :</h2>
             <ProjectCard projects={sixthBatch} />
         </div>
         <div className="batch">
             <h2 className="text-center mb-5  batch-title">Automotive :</h2>
             <ProjectCard projects={seventhBatch} />
         </div> */}
            </div>
        </div>
    );
};

export default ProjectDetails;
