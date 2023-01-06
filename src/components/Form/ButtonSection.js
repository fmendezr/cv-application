import { Component } from "react";

class ButtonSection extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <section>
                <button onClick={this.props.onReset}> Reset</button>
                <button onClick={this.props.onSample}> Sample CV</button>
            </section>
        )
    }
}

export default ButtonSection