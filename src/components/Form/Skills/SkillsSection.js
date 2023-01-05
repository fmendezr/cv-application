import { Component } from "react";
import SkillsItem from "./SkillsItem";

class SkillsSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <section style={stylingObject.section}>
            <h3 style={stylingObject.h3}>Skills</h3>
            {this.props.skillsItems.map((skillsItem) => {
                return (<SkillsItem 
                    skillsItem={skillsItem}
                    onSkillsChange={this.props.onSkillsChange}
                    onSkillsDelete={this.props.onSkillsDelete}
                    id={skillsItem.id}
                    key={skillsItem.id}
                />)
            })}
            <button style={stylingObject.btn} onClick={this.props.onSkillsAdd}>Add</button>        
        </section>)
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

export default SkillsSection;