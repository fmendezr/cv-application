import { Component } from "react";

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

class ProjectsItem extends Component {
    constructor(props){
        super(props);
    } 
    render(){
        return (
            <div>
                <input id={this.props.id} name="projectName" type="text" placeholder="Project Name" value={this.props.projectsItem.projectName} onChange={this.props.onProjectsChange}></input>
                <input id={this.props.id} name="link" type="link;." placeholder="link" value={this.props.projectsItem.link} onChange={this.props.onProjectsChange}></input>
                <input id={this.props.id} name="description" type="textarea" placeholder="Description" value={this.props.projectsItem.description} onChange={this.props.onProjectsChange}></input>
                <button id={this.props.id} onClick={this.props.onProjectDelete}>Delete</button>
            </div>
        )
    }
}

export default ProjectsSection;