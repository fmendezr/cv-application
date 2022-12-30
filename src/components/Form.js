import  {Component} from "react";

class Form extends Component {
    constructor(props){
        super(props);
    }

    render (){
        return(
            <form>
                <section>
                    <h3>Personal Information</h3>
                    <input name="firstName" placeholder="First Name" type="text" onChange={this.props.onPersonalChange}></input>
                    <input name="lastName" placeholder="Last Name" type="text" onChange={this.props.onPersonalChange}></input>
                    <input name="email" placeholder="Email" type="email" onChange={this.props.onPersonalChange}></input>
                    <input name="phone" placeholder="Phone Number" type="tel" onChange={this.props.onPersonalChange}></input>
                    <input name="address" placeholder="Address" type="text" onChange={this.props.onPersonalChange}></input>
                    <input name="goal" placeholder="Goal" onChange={this.props.onPersonalChange}></input>
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