import React from "react";

const EducationItem = (props) => {
    return (
        <div>
            <div>
                <p>{props.university}</p>
                <p>{props.degree}</p>
                <p>GPA: {props.gpa}</p>
            </div>
            <div>
                <p>{props.location}</p>
                <p>{props.graduationDate}</p>
            </div>
        </div>
    )
}

export default EducationItem;