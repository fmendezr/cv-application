import { Component } from "react";

class ButtonSection extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <section>
                <button onClick={this.props.onReset}> Reset</button>
                <button></button>
                <button></button>
            </section>
        )
    }
}

export default ButtonSection