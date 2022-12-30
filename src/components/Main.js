import React, {Component} from "react";
import Form from "./Form";


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
            experiece: [{ company: "", position: "", location: "", from: "", to: ""},],
            education: [{university: "", degree: "", gpa: "", location: "", graduationDate: ""}],
            skills: [{type: "", description:""}],
            projects: [{projectName: "", link: "", description: ""}],
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
                />
            </main>
        )
    }
}

export default Main;