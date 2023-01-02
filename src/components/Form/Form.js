import  {Component} from "react";
import PersonalInformationSection from "./PersonalInformation";
import EducationSection from "./Education";
import ExperienceSection from "./Experience";
import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";

class Form extends Component {
    constructor(props){
        super(props);
    }

    render (){
        return(
            <form>
                <PersonalInformationSection
                    personalInfoItem={this.props.personalInformation} 
                    onPersonalChange={this.props.onPersonalChange}
                />
                <EducationSection 
                    educationItems={this.props.education}
                    onEducationChange={this.props.onEducationChange}
                    onEducationDelete={this.props.onEducationDelete}
                    onEducationAdd={this.props.onEducationAdd}
                />
                <ExperienceSection 
                    experienceItems={this.props.experience}
                    onExperienceChange={this.props.onExperienceChange}
                    onExperienceDelete={this.props.onExperienceDelete}
                    onExperienceAdd={this.props.onExperienceAdd}
                 />
                <SkillsSection 
                    skillsItems={this.props.skills}
                    onSkillsChange={this.props.onSkillsChange}
                    onSkillsDelete={this.props.onSkillsDelete}
                    onSkillsAdd={this.props.onSkillsAdd}
                />
                <ProjectsSection
                    projectsItems={this.props.projects}
                    onProjectsChange={this.props.onProjectsChange}
                    onProjectDelete={this.props.onProjectDelete}
                    onProjectAdd={this.props.onProjectAdd}
                />
            </form>
        )
    }
}

export default Form;