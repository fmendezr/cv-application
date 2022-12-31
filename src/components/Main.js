import React, {Component} from "react";
import Form from "./Form";

const generateRandomID = () => {
    return Math.floor(Math.random() * 10**15)
}

class Main extends Component {
    constructor(props){
        super(props);
        this.handlePersonalChange = this.handlePersonalChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.handleExperienceDelete = this.handleExperienceDelete.bind(this);
        this.handleExperienceAdd = this.handleExperienceAdd.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleEducationDelete = this.handleEducationDelete.bind(this);
        this.handleEducationAdd = this.handleEducationAdd.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
        this.handleSkillsDelete = this.handleSkillsDelete.bind(this);
        this.handleSkillsAdd = this.handleSkillsAdd.bind(this);
        this.handleProjectsChange = this.handleProjectsChange.bind(this);
        this.handleProjectsDelete = this.handleProjectsDelete.bind(this)
        this.state = {
            personalInformation: {
                firstName: "",
                lastName: "",
                email: "", 
                address: "", 
                phone: "",
                goal: "",
            },
            experiece: [{id: generateRandomID(), company: "", position: "", location: "", from: "", to: ""},],
            education: [{id: generateRandomID(), university: "", degree: "", gpa: "", location: "", graduationDate: ""}],
            skills: [{id: generateRandomID(), type: "Databases", description:""}],
            projects: [{id: generateRandomID(), projectName: "", link: "", description: ""}],
        };
    }

    handlePersonalChange(e){
        const {name, value} = e.target;
        this.setState((previousState) => ({
        ...previousState,
        personalInformation: {
            ...previousState.personalInformation,
            [name]: value
        }
       }))
    }

    handleEducationChange(e){
        const {name, value, id} = e.target;
        this.setState((previousState) => {
            const newEducation = previousState.education.map((educationItem) => {
                if(educationItem.id == id){
                    return {...educationItem, [name]: value}
                }
                return educationItem
            })
            return {...previousState, education: newEducation}
        })
    }

    handleEducationDelete(e){
        e.preventDefault();
        this.setState((previousState) => {
            const newEducation = previousState.education.filter((educationItem) => educationItem.id != e.target.id)
            return {...previousState, education: [...newEducation]}
        })
    }

    handleEducationAdd(e){
        e.preventDefault();
        this.setState((previousState) => {
            return {
                ...previousState, 
                education: previousState.education.concat([{id: generateRandomID(), university: "", degree: "", gpa: "", location: "", graduationDate: ""}])}
        })
    }

    handleExperienceChange(e){
        const {name, value, id} = e.target;
        this.setState((previousState) => {
           const newExperience = previousState.experiece.map((experieceItem) => {
                if(experieceItem.id == id){
                    return {...experieceItem, [name]: value}
            }
            return experieceItem
           })
           return {...previousState, experiece: newExperience}
        })
    }

    handleExperienceDelete(e){
        e.preventDefault();
        this.setState((previousState) => {
            const newExperience = previousState.experiece.filter((experieceItem) => experieceItem.id != e.target.id)
            return {...previousState, experiece: [...newExperience]}
        })
    }

    handleExperienceAdd(e){
      e.preventDefault();
      this.setState((previousState) => ({
          ...previousState, 
          experiece: previousState.experiece.concat([{id: generateRandomID(), company: "", position: "", location: "", from: "", to: ""}])
      }))
    }

    handleSkillsChange(e){
        const {name, value, id } = e.target;
        this.setState((previousState) => {
            const newSkills = previousState.skills.map((skillsItems) => {
                if(skillsItems.id == id){
                    return {...skillsItems, [name]: value}
                }
                return skillsItems;
            })
           return {...previousState, skills: newSkills}
        })
    }   

    handleSkillsDelete(e){
        e.preventDefault();
        this.setState((previousState) => {
            const newSkills = previousState.skills.filter((skillsItem) => skillsItem.id != e.target.id )
            return {...previousState, skills: [...newSkills]}
        })
    }

    handleSkillsAdd(e){
        e.preventDefault();
        this.setState((previousState) => {
            return {...previousState, 
                skills: previousState.skills.concat([{id: generateRandomID(), type: "Databases", description:""}])}
        })
    }

    handleProjectsChange(e){
        const {name, value, id} = e.target
        this.setState((previousState) => {
            const newProjects = previousState.projects.map((projectsItem) => {
                if(projectsItem.id == id){
                    return {...projectsItem, [name]: value }
                } 
                return projectsItem
            })
            return {...previousState, projects: newProjects}
        })
    }

    handleProjectsDelete(e){
        e.preventDefault();
        this.setState((previousState) => {
            const newProjects = previousState.projects.filter((projectsItem) => projectsItem.id != e.target.id);
            return {...previousState, projects: newProjects}
        })
    }
  
    render(){
        return (
            <main>
                <Form 
                    onPersonalChange={this.handlePersonalChange}
                    experience={this.state.experiece}
                    onExperienceChange={this.handleExperienceChange}
                    onExperienceDelete={this.handleExperienceDelete}
                    onExperienceAdd={this.handleExperienceAdd}
                    education={this.state.education}
                    onEducationChange={this.handleEducationChange}
                    onEducationDelete={this.handleEducationDelete}
                    onEducationAdd={this.handleEducationAdd}
                    skills={this.state.skills}
                    onSkillsChange={this.handleSkillsChange}
                    onSkillsDelete={this.handleSkillsDelete}
                    onSkillsAdd={this.handleSkillsAdd}
                    projects={this.state.projects}
                    onProjectsChange={this.handleProjectsChange}
                    onProjectDelete={this.handleProjectsDelete}
                />
            </main>
        )
    }
}

export default Main;