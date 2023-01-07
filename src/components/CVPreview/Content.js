import ObjectiveSection from "./ObjectiveSection";
import EducationSection from "./Education/EducationSection";
import SkillsSection from "./Skills/SkillsSection";
import ProjectsSection from "./Projects/ProjectsSection";
import ExperienceSection from "./Experience/ExperienceSection";

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

export default Content;