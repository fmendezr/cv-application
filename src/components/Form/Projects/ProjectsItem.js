const ProjectsItem = (props) => {
    return (
        <div style={stylingObject.div}>
            <input id={props.id} name="projectName" type="text" placeholder="Project Name" value={props.projectsItem.projectName} onChange={props.onProjectsChange}></input>
            <input id={props.id} name="link" type="link;." placeholder="link" value={props.projectsItem.link} onChange={props.onProjectsChange}></input>
            <input id={props.id} name="description" type="textarea" placeholder="Description" value={props.projectsItem.description} onChange={props.onProjectsChange}></input>
            <button style={stylingObject.btn} id={props.id} onClick={props.onProjectDelete}>Delete</button>
        </div>
    )
}

const stylingObject = {
    div: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    btn: {
        height: "1.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "2px solid #000033",
        backgroundColor: "rgba(0, 0, 44, 0.326)"
    }
}

export default ProjectsItem;