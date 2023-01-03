import { Component } from "react";
import EducationItem from "./EducationItem";

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
                <button onClick={this.props.onEducationAdd}>Add</button>
            </section>
        )
    }
}

export default EducationSection;