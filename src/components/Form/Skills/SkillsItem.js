import { Component } from "react";

class SkillsItem extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div>
                <select id={this.props.id} name="type" value={this.props.skillsItem.type} onChange={this.props.onSkillsChange}>
                    <option id={this.props.id} name="type" value="Databases">Databases</option>
                    <option id={this.props.id} name="type" value="Frameworks">Frameworks</option>
                    <option id={this.props.id} name="type" value="Languages">Languages</option>
                    <option id={this.props.id} name="type" value="Libraries">Libraries</option>
                    <option id={this.props.id} name="type" value="Operating Systems">Operating Systems</option>
                    <option id={this.props.id} name="type" value="Other">Other</option>
                </select>
                <input id={this.props.id} name="description" placeholder="Specify here" value={this.props.skillsItem.description} onChange={this.props.onSkillsChange}></input>
                <button id={this.props.id} onClick={this.props.onSkillsDelete}>Delete</button>
            </div>
        )
    }
}

export default SkillsItem;