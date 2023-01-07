import React, {useState} from "react";
import Form from "./Form/Form.js";
import CV from "./CVPreview/CVPreview.js";

const generateRandomID = () => {
    return Math.floor(Math.random() * 10**15)
}

const Main = () => {
    const [cv, setCv] = useState({
        personalInformation: {firstName: "", lastName: "", email: "", address: "", phone: "", goal: "",},
        experiece: [{id: generateRandomID(), company: "", position: "", location: "", from: "", to: ""},],
        education: [{id: generateRandomID(), university: "", degree: "", gpa: "", location: "", graduationDate: ""}],
        skills: [{id: generateRandomID(), type: "Databases", description:""}],
        projects: [{id: generateRandomID(), projectName: "", link: "", description: ""}],
    });

    const handlePersonalChange =(e) => {
        const {name, value} = e.target;
        setCv((previousState) => ({
        ...previousState,
        personalInformation: {
            ...previousState.personalInformation,
            [name]: value
        }
       }))
    }

    const handleEducationChange = (e) => {
        const {name, value, id} = e.target;
        setCv((previousState) => {
            const newEducation = previousState.education.map((educationItem) => {
                if(educationItem.id == id){
                    return {...educationItem, [name]: value}
                }
                return educationItem
            })
            return {...previousState, education: newEducation}
        })
    }

    const handleEducationDelete = (e) => {
        e.preventDefault();
        setCv((previousState) => {
            const newEducation = previousState.education.filter((educationItem) => educationItem.id != e.target.id)
            return {...previousState, education: [...newEducation]}
        })
    }

    const handleEducationAdd = (e) => {
        e.preventDefault();
        setCv((previousState) => {
            return {
                ...previousState, 
                education: previousState.education.concat([{id: generateRandomID(), university: "", degree: "", gpa: "", location: "", graduationDate: ""}])}
        })
    }

    const handleExperienceChange = (e) => {
        const {name, value, id} = e.target;
        setCv((previousState) => {
           const newExperience = previousState.experiece.map((experieceItem) => {
                if(experieceItem.id == id){
                    return {...experieceItem, [name]: value}
            }
            return experieceItem
           })
           return {...previousState, experiece: newExperience}
        })
    }

    const handleExperienceDelete = (e) => {
        e.preventDefault();
        setCv((previousState) => {
            const newExperience = previousState.experiece.filter((experieceItem) => experieceItem.id != e.target.id)
            return {...previousState, experiece: [...newExperience]}
        })
    }

    const handleExperienceAdd = (e) => {
      e.preventDefault();
      setCv((previousState) => ({
          ...previousState, 
          experiece: previousState.experiece.concat([{id: generateRandomID(), company: "", position: "", location: "", from: "", to: ""}])
      }))
    }

    const handleSkillsChange = (e) => {
        const {name, value, id } = e.target;
        setCv((previousState) => {
            const newSkills = previousState.skills.map((skillsItems) => {
                if(skillsItems.id == id){
                    return {...skillsItems, [name]: value}
                }
                return skillsItems;
            })
           return {...previousState, skills: newSkills}
        })
    }   

    const handleSkillsDelete = (e) => {
        e.preventDefault();
        setCv((previousState) => {
            const newSkills = previousState.skills.filter((skillsItem) => skillsItem.id != e.target.id )
            return {...previousState, skills: [...newSkills]}
        })
    }

    const handleSkillsAdd = (e) =>{
        e.preventDefault();
        setCv((previousState) => {
            return {...previousState, 
                skills: previousState.skills.concat([{id: generateRandomID(), type: "Databases", description:""}])}
        })
    }

    const handleProjectsChange = (e) => {
        const {name, value, id} = e.target
        setCv((previousState) => {
            const newProjects = previousState.projects.map((projectsItem) => {
                if(projectsItem.id == id){
                    return {...projectsItem, [name]: value }
                } 
                return projectsItem
            })
            return {...previousState, projects: newProjects}
        })
    }

    const handleProjectsDelete = (e) => {
        e.preventDefault();
        setCv((previousState) => {
            const newProjects = previousState.projects.filter((projectsItem) => projectsItem.id != e.target.id);
            return {...previousState, projects: newProjects}
        })
    }

    const handleProjectsAdd = (e) => {
        e.preventDefault();
        setCv((previousState) => {
            return {...previousState, 
            projects: previousState.projects.concat([{id: generateRandomID(), projectName: "", link: "", description: ""}])}
        })
    }

    const handleReset = (e) => {
        e.preventDefault();
        setCv({
            personalInformation: {firstName: "", lastName: "", email: "", address: "", phone: "", goal: "",},
            experiece: [{id: generateRandomID(), company: "", position: "", location: "", from: "", to: ""},],
            education: [{id: generateRandomID(), university: "", degree: "", gpa: "", location: "", graduationDate: ""}],
            skills: [{id: generateRandomID(), type: "Databases", description:""}],
            projects: [{id: generateRandomID(), projectName: "", link: "", description: ""}],
        })
    }

    const handleSampleCV = (e) => {
        e.preventDefault();
        setCv({
            personalInformation: {firstName: "Felix", lastName: "Mendez", email: "mendez.flx@gmail.com", address: "15402 N Campus Mail Ctr, Tampa FL 33602", phone: "786-400-9769", goal: "Get an internship in New York"},
            experiece: [{id: generateRandomID(), company: "Graziano's Market", position: "Dishwsher", location: "Doral, Fl", from: "July 2021", to: "August 2021"},],
            education: [{id: generateRandomID(), university: "University of South Florida", degree: "Bachelor of Science in Computer Science", gpa: "4.0", location: "Tampa, Fl", graduationDate: "Expected May 2026"}, {id: generateRandomID(), university: "U.E.P. Academia Washington", degree: "High School Diploma", gpa: "4.12", location: "Caracas, Vzla", graduationDate: "Jul 2023"}],
            skills: [{id: generateRandomID(), type: "Platforms", description:"Personal Computers and other Apple devices"}, {id: generateRandomID(), type: "Operating Systems", description:"MacOS and Linux (Ubuntu)"}, {id: generateRandomID(), type: "Languages", description: "JavaScript, HTML, CSS, Python"}, {id: generateRandomID(), type: "Libraries", description: "React.js, Pandas, NumPy, Keras "}, {id: generateRandomID(), type: "Frameworks", description: "Bootstrap, Express.js, Django "}, {id: generateRandomID(), type: "Databases", description:"MongoDB and SQL"}],
            projects: [{id: generateRandomID(), projectName: "Amazon Clone", link: "", description: "User interface that allow s user to login/register, browse through products, filter through products, review products, add them to cart/wish list, edit/delete their accounts. •	Admin dashboard that allows add/list products, update product details, view list of all users that have purchased the product."}, {projectName: "Chatbox", link: "", description: "Using Python, Keras, and OpenCV, we will develop a deep learning model for face mask detection. A Keras-based network architecture is used to train the model."}],
        })
    }
  
    return (
            <main>
                <Form 
                    personalInformation={cv.personalInformation}
                    onPersonalChange={handlePersonalChange}
                    experience={cv.experiece}
                    onExperienceChange={handleExperienceChange}
                    onExperienceDelete={handleExperienceDelete}
                    onExperienceAdd={handleExperienceAdd}
                    education={cv.education}
                    onEducationChange={handleEducationChange}
                    onEducationDelete={handleEducationDelete}
                    onEducationAdd={handleEducationAdd}
                    skills={cv.skills}
                    onSkillsChange={handleSkillsChange}
                    onSkillsDelete={handleSkillsDelete}
                    onSkillsAdd={handleSkillsAdd}
                    projects={cv.projects}
                    onProjectsChange={handleProjectsChange}
                    onProjectDelete={handleProjectsDelete}
                    onProjectAdd={handleProjectsAdd}
                    onReset={handleReset}
                    onSample={handleSampleCV}
                />
                <CV 
                    information={cv}
                />
            </main>
        )
    }


export default Main;