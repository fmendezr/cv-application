import { Component} from "react";

class CV extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header 
                    firstName={this.props.information.personalInformation.firstName}
                    lastName={this.props.information.personalInformation.lastName}
                    address={this.props.information.personalInformation.address}
                    phone={this.props.information.personalInformation.phone}
                    email={this.props.information.personalInformation.email}
                />
                <Content 
                    objective={this.props.information.personalInformation.goal}
                    education={this.props.information.education}
                    skills={this.props.information.skills}
                    projects={this.props.information.projects}
                    experience={this.props.information.experience}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>{props.address}</p>
            <p>Phone: {props.phone} Email: {props.email}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <ObjectiveSection 
                objective={props.objective}
            />
            <Education 
                education={props.education}
            />
            <Skills 
                skills={props.skills}
            />
            <Projects 
                projects={props.projects}
            />
            <Experience
                experience={props.experience}
            />
        </div>
    )
}

const ObjectiveSection = (props) => {
    return (
        <section>   
            <h3>Objective</h3>
            <p>{props.objective}</p>
        </section>
    )
}

const Education = (props) => {
    return (
        <div></div>
    )
}

const Skills = (props) => {
    return (
        <div></div>
    )
}

const Projects = (props) => {
    return (
        <div></div>
    )
}

const Experience = (props) => {
    return (
        <div></div>
    )
}

export default CV;