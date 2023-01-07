import ProjectsItem from "./ProjectsItem";

const ProjectsSection = (props) => {
    return (
        <section style={stylingObject.section}>
            <h3 style={stylingObject.h3}>Projects</h3>
            {props.projectsItems.map((projectsItem) => {
                return (<ProjectsItem 
                    projectsItem={projectsItem}
                    onProjectsChange={props.onProjectsChange}
                    onProjectDelete={props.onProjectDelete}
                    id={projectsItem.id}
                    key={projectsItem.id}
                />)
            })}
            <button style={stylingObject.btn} onClick={props.onProjectAdd}>Add</button>
        </section>
    )
}

const stylingObject = {
    section: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "1rem"
    },
    h3: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "rgb(0, 0, 51)"
    },
    btn: {
        height: "1.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "2px solid #000033",
        backgroundColor: "rgba(0, 0, 44, 0.326)"
    }
}

export default ProjectsSection;