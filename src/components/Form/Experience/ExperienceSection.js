import { Component } from "react";
import ExperienceItem from "./ExperienceItems";

class ExperienceSection extends Component {
    constructor(props){
        super(props);
    }

     render(){
        return (
            <section style={stylingObject.section}>
                <h3 style={stylingObject.h3}>Experience</h3>
                {this.props.experienceItems.map((experienceItem) => {
                    return (<ExperienceItem
                    experienceItem={experienceItem}
                    onExperienceChange={this.props.onExperienceChange}
                    onExperienceDelete={this.props.onExperienceDelete}
                    id={experienceItem.id}
                    key={experienceItem.id}
                 />)
                })}
                <button style={stylingObject.btn} onClick={this.props.onExperienceAdd}>Add</button>
            </section>
        )
     }
}

const stylingObject = {
    section: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "1rem", 
    },
    h3: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "rgb(0, 0, 51)"
    },
    btn: {
        height: "1.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "2px solid #000033",
        backgroundColor: "rgba(0, 0, 44, 0.326)"
    }
}

export default ExperienceSection;