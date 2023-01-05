import { Component } from "react";

class ExperienceItem extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div style={stylingObject.div}>
                <input id={this.props.id} name="company" type="text" placeholder="Company" value={this.props.experienceItem.company} onChange={this.props.onExperienceChange}></input>
                <input id= {this.props.id} name="position" type="text" placeholder="Position" value={this.props.experienceItem.position} onChange={this.props.onExperienceChange}></input>
                <input id={this.props.id} name="location" type="text" placeholder="Location" value={this.props.experienceItem.location} onChange={this.props.onExperienceChange}></input>
                <input id={this.props.id} name="from" type="text" placeholder="From" value={this.props.experienceItem.from} onChange={this.props.onExperienceChange}></input>
                <input id={this.props.id} name="to" type="text" placeholder="To" value={this.props.experienceItem.to} onChange={this.props.onExperienceChange}></input>
                <button style={stylingObject.btn} id={this.props.id} onClick={this.props.onExperienceDelete}>Delete</button>
            </div>
        )
    }
}

const stylingObject = {
    div: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    btn: {
        height: "1.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "2px solid #000033",
        backgroundColor: "rgba(0, 0, 44, 0.326)"
    }
}

export default ExperienceItem;