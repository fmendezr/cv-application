import ProjectsItem from "./ProjectsItem";

const ProjectsSection = (props) => {
    return (
        <section>
            <h3 style={stylingObject.h3}>KEY PROJECTS</h3>
            <div style={stylingObject.div}></div>
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

const stylingObject = {
    h3: {
        fontSize: "1rem",
        marginTop: "1rem"
    },
    div: {
        width: "100%",
        height: "2px",
        backgroundColor: "black",
        margin: "2px 0 1rem 0"
    },
}

export default ProjectsSection;