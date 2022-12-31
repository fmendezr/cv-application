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
                <EducationSection 
                    educationItems={this.props.education}
                    onEducationChange={this.props.onEducationChange}
                    onEducationDelete={this.props.onEducationDelete}
                />
                <ExperienceSection 
                    experienceItems={this.props.experience}
                    onExperienceChange={this.props.onExperienceChange}
                    onExperienceDelete={this.props.onExperienceDelete}
                    onExperienceAdd={this.props.onExperienceAdd}
                 />
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

class EducationSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section>
                <h3>Education</h3>
                {this.props.educationItems.map((educationItem) => {
                    return (<EducationItem 
                        educationItem={educationItem}
                        onEducationChange={this.props.onEducationChange}
                        onEducationDelete={this.props.onEducationDelete}
                        id={educationItem.id}
                        key={educationItem.id}
                    />)
                })}
                <button>Add</button>
            </section>
        )
    }
}

class EducationItem extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div>
                <input id={this.props.id} name="university" type="text" placeholder="University Name" value={this.props.educationItem.university} onChange={this.props.onEducationChange}></input>
                <input id={this.props.id} name="degree" type="text" placeholder="Degree" value={this.props.educationItem.degree} onChange={this.props.onEducationChange}></input>
                <input id={this.props.id} name="gpa" type="text" step="0.1" max="4.0" placeholder="GPA" value={this.props.educationItem.gpa} onChange={this.props.onEducationChange}></input>
                <input id={this.props.id} name="location" type="text" placeholder="Location" value={this.props.educationItem.location} onChange={this.props.onEducationChange}></input>
                <input id={this.props.id} name="graduationDate" type="text" placeholder="Graduation Date" value={this.props.educationItem.graduationDate} onChange={this.props.onEducationChange}></input>
                <button id={this.props.id} onClick={this.props.onEducationDelete}> Delete </button>
            </div>
        )
    }
}

class ExperienceSection extends Component {
    constructor(props){
        super(props);
    }

     render(){
        return (
            <section>
                <h3>Experience</h3>
                {this.props.experienceItems.map((experienceItem) => {
                    return (<ExperienceItem
                    experienceItem={experienceItem}
                    onExperienceChange={this.props.onExperienceChange}
                    onExperienceDelete={this.props.onExperienceDelete}
                    id={experienceItem.id}
                    key={experienceItem.id}
                 />)
                })}
                <button onClick={this.props.onExperienceAdd}>Add</button>
            </section>
        )
     }
}

class ExperienceItem extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div>
                <input id={this.props.id} name="company" type="text" placeholder="Company" value={this.props.experienceItem.company} onChange={this.props.onExperienceChange}></input>
                <input id= {this.props.id} name="position" type="text" placeholder="Position" value={this.props.experienceItem.position} onChange={this.props.onExperienceChange}></input>
                <input id={this.props.id} name="location" type="text" placeholder="Location" value={this.props.experienceItem.location} onChange={this.props.onExperienceChange}></input>
                <input id={this.props.id} name="from" type="text" placeholder="From" value={this.props.experienceItem.from} onChange={this.props.onExperienceChange}></input>
                <input id={this.props.id} name="to" type="text" placeholder="To" value={this.props.experienceItem.to} onChange={this.props.onExperienceChange}></input>
                <button id={this.props.id} onClick={this.props.onExperienceDelete}>Delete</button>
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