import { Component} from "react";
import Header from "./Header";
import Content from "./Content";

class CV extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header 
                    firstName={this.props.information.personalInformation.firstName}
                    lastName={this.props.information.personalInformation.lastName}
                    address={this.props.information.personalInformation.address}
                    phone={this.props.information.personalInformation.phone}
                    email={this.props.information.personalInformation.email}
                />
                <Content 
                    objective={this.props.information.personalInformation.goal}
                    education={this.props.information.education}
                    skills={this.props.information.skills}
                    projects={this.props.information.projects}
                    experience={this.props.information.experiece}
                />
            </div>
        )
    }
}

export default CV;