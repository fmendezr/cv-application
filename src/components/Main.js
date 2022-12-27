import React, {Component} from "react";
import Form from "./Form";


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            title: "",
            photo: "",
            address: "", 
            phoneNumber: "",
            email: "",
            description: "",
            experiece: [],
            education: [],
            skills: [],
            projects: [],
        };
    }

    render(){
        return (
            <main>
                <Form />
            </main>
        )
    }
}

export default Main;