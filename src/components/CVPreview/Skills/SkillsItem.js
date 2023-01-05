import React from "react";

const SkillsItem = (props) => {
    return (
        <div style={stylingObject.div}>
            <p>{props.type}: {props.description}</p>
        </div>
    )
}

const stylingObject = {
    div: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "3rem"
    },
}

export default SkillsItem;