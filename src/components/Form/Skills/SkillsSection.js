import { Component } from "react";
import SkillsItem from "./SkillsItem";

class SkillsSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <section>
            <h3>Skills</h3>
            {this.props.skillsItems.map((skillsItem) => {
                return (<SkillsItem 
                    skillsItem={skillsItem}
                    onSkillsChange={this.props.onSkillsChange}
                    onSkillsDelete={this.props.onSkillsDelete}
                    id={skillsItem.id}
                    key={skillsItem.id}
                />)
            })}
            <button onClick={this.props.onSkillsAdd}>Add</button>        
        </section>)
    }
}

export default SkillsSection;