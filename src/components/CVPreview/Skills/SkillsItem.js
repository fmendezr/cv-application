import React from "react";

const SkillsItem = (props) => {
    return (
        <div>
            <p>{props.type}: {props.description}</p>
        </div>
    )
}

export default SkillsItem;