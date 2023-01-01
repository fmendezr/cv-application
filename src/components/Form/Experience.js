import { Component } from "react";

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

export default ExperienceSection;