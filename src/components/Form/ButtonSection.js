import { Component } from "react";

class ButtonSection extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <section style={stylingObject.section}>
                <button style={stylingObject.btn} onClick={this.props.onReset}> Reset</button>
                <button style={stylingObject.btn} onClick={this.props.onSample}> Sample CV</button>
            </section>
        )
    }
}

const stylingObject = { 
    section: {
        display: "flex",
        justifyContent: "space-between"
    },
    btn: {
        width: "45%",
        height: "1.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "2px solid #000033",
        backgroundColor: "rgba(0, 0, 44, 0.326)"
    }
}

export default ButtonSection