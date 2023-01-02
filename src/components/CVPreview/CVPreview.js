import { Component} from "react";

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
                <></>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>{props.address}</p>
            <p>Phone: {props.phone} Email: {props.email}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Objective />
            <Education />
            <Skills />
            <Projects />
            <Experience />
        </div>
    )
}

const Objective = (props) => {
    return (
        <div></div>
    )
}

const Education = (props) => {
    return (
        <div></div>
    )
}

const Skills = (props) => {
    return (
        <div></div>
    )
}

const Projects = (props) => {
    return (
        <div></div>
    )
}

const Experience = (props) => {
    return (
        <div></div>
    )
}

export default CV;