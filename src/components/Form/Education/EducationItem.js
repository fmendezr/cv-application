import { Component } from "react";

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

export default EducationItem;