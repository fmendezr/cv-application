import { Component } from "react";

class PersonalInformationSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section style={stylingObject.section}>
                <h3 style={stylingObject.h3}>Personal Information</h3>
                <input name="firstName" placeholder="First Name" type="text" onChange={this.props.onPersonalChange}></input>
                <input name="lastName" placeholder="Last Name" type="text" onChange={this.props.onPersonalChange}></input>
                <input name="email" placeholder="Email" type="email" onChange={this.props.onPersonalChange}></input>
                <input name="phone" placeholder="Phone Number" type="tel" onChange={this.props.onPersonalChange}></input>
                <input name="address" placeholder="Address" type="text" onChange={this.props.onPersonalChange}></input>
                <input name="goal" placeholder="Goal" onChange={this.props.onPersonalChange}></input>
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
        color: "#000033"
    }
}

export default PersonalInformationSection;