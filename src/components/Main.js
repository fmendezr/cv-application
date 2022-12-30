import React, {Component} from "react";
import Form from "./Form";

const generateRandomID = () => {
    return Math.floor(Math.random() * 10**15)
}

class Main extends Component {
    constructor(props){
        super(props);
        this.handlePersonalChange = this.handlePersonalChange.bind(this);
        this.state = {
            personalInformation: {
                firstName: "",
                lastName: "",
                email: "", 
                address: "", 
                phone: "",
                goal: "",
            },
            experiece: [{id: generateRandomID(), company: "Amazon", position: "", location: "", from: "", to: ""},],
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

    render(){
        return (
            <main>
                <Form 
                    onPersonalChange={this.handlePersonalChange}
                    experience={this.state.experiece}
                />
            </main>
        )
    }
}

export default Main;