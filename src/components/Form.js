import  {Component} from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleSecondNameChange = this.handleSecondNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleGoalChange = this.handleGoalChange.bind(this);
    }

    handleFirstNameChange(e){
        this.props.onFirstNameChange(e.target.value);
    }

    handleSecondNameChange(e){
        this.props.onSecondNameChange(e.target.value);
    }

    handleEmailChange(e){
        this.props.onEmailChange(e.target.value);
    }

    handleAddressChange(e){
        this.props.onAddressChange(e.target.value);
    }

    handlePhoneChange(e){
        this.props.onPhoneChange(e.target.value);
    }

    handleGoalChange(e){
        this.props.onGoalChange(e.target.value);
    }

    render (){
        return(
            <form>
                <section>
                    <h3>Personal Information</h3>
                    <input name="firstName" placeholder="First Name" type="text" onChange={this.handleFirstNameChange}></input>
                    <input name="lastName" placeholder="Last Name" type="text" onChange={this.handleSecondNameChange}></input>
                    <input name="email" placeholder="Email" type="email" onChange={this.handleEmailChange}></input>
                    <input name="phone" placeholder="Phone Number" type="tel" onChange={this.handlePhoneChange}></input>
                    <input name="address" placeholder="Address" type="text"></input>
                    <input name="goal" placeholder="Goal" onChange={this.handleGoalChange}></input>
                </section>
                <section>
                    <h3>Education</h3> 
                    <Education />
                    <button> Add </button>
                </section>
                <section>
                    <h3>Experience</h3>
                    <Experience/>
                    <button> Add </button>
                </section>
                <section>
                    <h3>Skills</h3>
                    <Skill />
                    <button> Add </button>
                </section>
                <section>
                    <h3>Notable Projects</h3>
                    <Project />
                    <button> Add </button>
                </section>
            </form>
        )
    }
}

class Education extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div>
                <input name="university" placeholder="University Name" type="text"></input>
                <input name="degree" placeholder="Degree" type="text"></input>
                <input name="gpa" placeholder="GPA" type="number" step="0.1" max="4.0"></input>
                <input name="location" placeholder="Location" type="text"></input>
                <input name="graduationDate" placeholder="Graduation Date" type="text"></input>
                <button> Delete </button>
            </div>
        )
    }
}

class Experience extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div>
                <input name="company" placeholder="Company" type="text"></input>
                <input name="position" placeholder="Position" type="text"></input>
                <input name="location" placeholder="Location" type="text"></input>
                <input name="from" placeholder="From" type="text"></input>
                <input name="to" placeholder="To" type="text"></input>
                <button>Delete</button>
            </div>
        )
    }
}

class Skill extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div>
                <select>
                    <option name="type" value="operatingSystems">Operating Systems</option>
                    <option name="type" value="languages">Languages</option>
                    <option name="type" value="frameworks">Frameworks</option>
                    <option name="type" value="libraries">Libraries</option>
                    <option name="type" value="databases">Databases</option>
                    <option name="type" value="other">Other</option>
                </select>
                <input placeholder="Type here"></input>
            </div>
        )
    }
}


class Project extends Component {
    constructor(props){
        super(props);
    } 
    render(){
        return (
            <div>
                <input name="projectName" placeholder="Project Name" type="text"></input>
                <input name="link" placeholder="link" type="link"></input>
                <input name="description" placeholder="Description" type="textarea"></input>
                <button>Delete</button>
            </div>
        )
    }
}

export default Form;