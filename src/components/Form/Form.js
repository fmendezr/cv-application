import PersonalInformationSection from "./PersonalInformation";
import EducationSection from "./Education/EducationSection";
import ExperienceSection from "./Experience/ExperienceSection";
import SkillsSection from "./Skills/SkillsSection";
import ProjectsSection from "./Projects/ProjectsSection";
import ButtonSection from "./ButtonSection";

const Form = (props) => {  
    return(
        <form style={stylingObject.form}>
            <PersonalInformationSection
                personalInfoItem={props.personalInformation} 
                onPersonalChange={props.onPersonalChange}
            />
            <EducationSection 
                educationItems={props.education}
                onEducationChange={props.onEducationChange}
                onEducationDelete={props.onEducationDelete}
                onEducationAdd={props.onEducationAdd}
            />
            <ExperienceSection 
                experienceItems={props.experience}
                onExperienceChange={props.onExperienceChange}
                onExperienceDelete={props.onExperienceDelete}
                onExperienceAdd={props.onExperienceAdd}
             />
            <SkillsSection 
                skillsItems={props.skills}
                onSkillsChange={props.onSkillsChange}
                onSkillsDelete={props.onSkillsDelete}
                onSkillsAdd={props.onSkillsAdd}
            />
            <ProjectsSection
                projectsItems={props.projects}
                onProjectsChange={props.onProjectsChange}
                onProjectDelete={props.onProjectDelete}
                onProjectAdd={props.onProjectAdd}
            />
            <ButtonSection 
                onReset={props.onReset}
                onSample={props.onSample}
            />
        </form>
    )
}

const stylingObject = {
    form: {
        width: "600px",
        display: "flex",
        flexDirection: "column",
        padding: "1rem"
    }
}

export default Form;