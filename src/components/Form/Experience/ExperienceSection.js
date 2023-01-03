import { Component } from "react";
import ExperienceItem from "./ExperienceItems";

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

export default ExperienceSection;