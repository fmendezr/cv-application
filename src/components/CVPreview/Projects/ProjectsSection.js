import React from "react";
import ProjectsItem from "./ProjectsItem";

const ProjectsSection = (props) => {
    return (
        <section>
            <h3>Key Projects</h3>
            {props.projects.map((projectsItem) => {
                return (
                    <ProjectsItem 
                        projectName={projectsItem.projectName}
                        link={projectsItem.link}
                        description={projectsItem.description}
                        id={projectsItem.id}
                        key={projectsItem.id}
                    />
                )
            })}
        </section>
    )
}

export default ProjectsSection;