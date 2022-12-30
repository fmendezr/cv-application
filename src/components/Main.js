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
            skills: [{id: generateRandomID(), type: "", description:""}],
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
        const id = e.target;
        this.setState((previousState) => {
            const newExperience = previousState.experiece.filter((experieceItem) => experieceItem.id == id)
            return {...previousState, experiece: newExperience}
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
                />
            </main>
        )
    }
}

export default Main;