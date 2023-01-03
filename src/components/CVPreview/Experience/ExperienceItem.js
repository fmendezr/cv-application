import React from "react";

const ExperienceItem = (props) => {
    return(
        <div>
            <div>
                <p>{props.company}</p>
                <p>{props.position}</p>
            </div>
            <div>
                <p>{props.location}</p>
                <p>{props.from} - {props.to}</p>
            </div>
        </div>
    )
}

export default ExperienceItem;