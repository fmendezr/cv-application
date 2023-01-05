import {Component} from "react";

class ProjectsItem extends Component {
    constructor(props){
        super(props);
    } 
    render(){
        return (
            <div style={stylingObject.div}>
                <input id={this.props.id} name="projectName" type="text" placeholder="Project Name" value={this.props.projectsItem.projectName} onChange={this.props.onProjectsChange}></input>
                <input id={this.props.id} name="link" type="link;." placeholder="link" value={this.props.projectsItem.link} onChange={this.props.onProjectsChange}></input>
                <input id={this.props.id} name="description" type="textarea" placeholder="Description" value={this.props.projectsItem.description} onChange={this.props.onProjectsChange}></input>
                <button style={stylingObject.btn} id={this.props.id} onClick={this.props.onProjectDelete}>Delete</button>
            </div>
        )
    }
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