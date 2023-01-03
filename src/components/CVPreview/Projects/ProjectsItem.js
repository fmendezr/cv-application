import React from "react";

const ProjectsItem = (props) => {
    return (
        <div>
            <h5>{props.projectName}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectsItem;