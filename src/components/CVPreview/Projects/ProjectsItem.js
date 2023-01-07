const ProjectsItem = (props) => {
    return (
        <div>
            <h5 style={stylingObject.h5}>{props.projectName}</h5>
            <p style={stylingObject.p}>{props.description}</p>
        </div>
    )
}

const stylingObject = {
    h5: {
        marginLeft: "3rem",
        fontWeight: "bold"
    },
    p: {
        marginLeft: "6rem",
    }
}

export default ProjectsItem;