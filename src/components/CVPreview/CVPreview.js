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
                    experience={this.props.information.experiece}
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
            <SkillsSection 
                skills={props.skills}
            />
            <ProjectsSection 
                projects={props.projects}
            />
            <ExperienceSection
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

const SkillsSection = (props) => {
    return (
        <section>
            <h3>Skills</h3>
            {props.skills.map((skillsItem) => {
                return(
                    <SkillsItem 
                        type={skillsItem.type}
                        description={skillsItem.description}
                        id={skillsItem.id}
                        key={skillsItem.id}
                    />
                )
            })}
        </section>
    )
}

const SkillsItem = (props) => {
    return (
        <div>
            <p>{props.type}: {props.description}</p>
        </div>
    )
}

const ProjectsSection = (props) => {
    return (
        <section>
            <h3>Key Projects</h3>
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

const ProjectsItem = (props) => {
    return (
        <div>
            <h5>{props.projectName}</h5>
            <p>{props.description}</p>
        </div>
    )
}

const ExperienceSection = (props) => {
    return (
        <section>
            <h3>Experience</h3>
            {props.experience.map((experienceItem) => {
                return (
                    <ExperienceItem 
                        company={experienceItem.company}
                        position={experienceItem.position}
                        location={experienceItem.location}
                        from={experienceItem.from}
                        to={experienceItem.to}
                        id={experienceItem.id}
                        key={experienceItem.key}
                    />
                )
            })}
        </section>
    )
}

const ExperienceItem = (props) => {
    return(
        <div>
            <div>
                <p>{props.company}</p>
                <p>{props.position}</p>
            </div>
            <div>
                <p>{props.location}</p>
                <p>{props.from} - {props.to}</p>
            </div>
        </div>
    )
}

export default CV;