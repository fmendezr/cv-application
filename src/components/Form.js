import  {Component} from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render (){
        return(
            <form>
                <section>
                    <h3>Personal Information</h3>
                    <input placeholder="First Name" type="text"></input>
                    <input placeholder="Last Name" type="text"></input>
                    <input placeholder="Email" type="email"></input>
                    <input placeholder="objective"></input>
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
        this.state = {};
    }
    render (){
        return (
            <div>
                <input placeholder="University Name" type="text"></input>
                <input placeholder="Degree" type="text"></input>
                <input placeholder="GPA" type="number" step="0.1" max="4.0"></input>
                <input placeholder="Location" type="text"></input>
                <input placeholder="Graduation Date" type="text"></input>
                <button> Delete </button>
            </div>
        )
    }
}

class Experience extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render (){
        return (
            <div>
                <input placeholder="Company" type="text"></input>
                <input placeholder="Position" type="text"></input>
                <input placeholder="Location" type="text"></input>
                <input placeholder="From" type="text"></input>
                <input placeholder="To" type="text"></input>
                <button>Delete</button>
            </div>
        )
    }
}

class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render (){
        return (
            <div>
                <select>
                    <option value="operatingSystems">Operating Systems</option>
                    <option value="languages">Languages</option>
                    <option value="frameworks">Frameworks</option>
                    <option value="libraries">Libraries</option>
                    <option value="databases">Databases</option>
                    <option value="other">Other</option>
                </select>
                <input placeholder="Type here"></input>
            </div>
        )
    }
}


class Project extends Component {
    constructor(props){
        super(props)
        this.state = {};
    } 
    render(){
        return (
            <div>
                <input type="text" placeholder="Project Name"></input>
                <input placeholder="link" type="link"></input>
                <input type="textarea" placeholder="Description"></input>
                <button>Delete</button>
            </div>
        )
    }
}

export default Form;