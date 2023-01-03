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
            <EducationSection
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

const EducationSection = (props) => {
    return (
        <section>
            <h3>Education</h3>
            {props.education.map((educationItem) => {
                return (
                    <EducationItem 
                        university={educationItem.university}
                        degree={educationItem.degree}
                        gpa={educationItem.gpa}
                        location={educationItem.location}
                        graduationDate={educationItem.graduationDate}
                        id={educationItem.id}
                        key={educationItem.id}
                    />
                )
            })}
        </section>
    )
}

const EducationItem = (props) => {
    return (
        <div>
            <div>
                <p>{props.university}</p>
                <p>{props.degree}</p>
                <p>GPA: {props.gpa}</p>
            </div>
            <div>
                <p>{props.location}</p>
                <p>{props.graduationDate}</p>
            </div>
        </div>
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