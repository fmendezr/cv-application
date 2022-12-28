import React, {Component} from "react";
import Form from "./Form";


class Main extends Component {
    constructor(props){
        super(props);
        this.handlefirstNameChange = this.handlefirstNameChange.bind(this);
        this.handleSecondNameChange = this.handleSecondNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.state = {
            firstName: "",
            lastname: "",
            email: "", 
            address: "", 
            phone: "",
            goal: "",
            experiece: [],
            education: [],
            skills: [],
            projects: [],
        };
    }

    handlefirstNameChange(firstName){
        this.setState({firstName});
    }

    handleSecondNameChange(lastname){
        this.setState({lastname});
    }

    handleEmailChange(email){
        this.setState({email});
    }

    handleAddressChange(address){
        this.setState({address});
    }

    handlePhoneChange(phone){
        this.setState({phone});
    }

    handleGoalChange(goal){
        this.setState({goal});
    }

    render(){
        return (
            <main>
                <Form 
                    onFirstNameChange={this.handlefirstNameChange}
                    onSecondNameChange={this.handleSecondNameChange}
                    onEmailChange={this.handleEmailChange}
                    onAddressChange={this.handleAddressChange}
                    onPhoneChange={this.handlePhoneChange}
                    onGoalChange={this.handleGoalChange}
                />
            </main>
        )
    }
}

export default Main;