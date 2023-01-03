import { Component } from "react";
import ProjectsItem from "./ProjectsItem";

class ProjectsSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section>
                <h3>Projects</h3>
                {this.props.projectsItems.map((projectsItem) => {
                    return (<ProjectsItem 
                        projectsItem={projectsItem}
                        onProjectsChange={this.props.onProjectsChange}
                        onProjectDelete={this.props.onProjectDelete}
                        id={projectsItem.id}
                        key={projectsItem.id}
                    />)
                })}
                <button onClick={this.props.onProjectAdd}>Add</button>
            </section>
        )
    }
}

export default ProjectsSection;