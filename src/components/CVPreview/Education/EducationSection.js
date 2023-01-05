import React from "react"
import EducationItem from "./EducationItem"

const EducationSection = (props) => {
    return (
        <section>
            <h3 style={stylingObject.h3}>EDUCATION</h3>
            <div style={stylingObject.div}></div>
            {props.education.map((educationItem) => {
                return (
                    <EducationItem 
                        university={educationItem.university}
                        degree={educationItem.degree}
                        gpa={educationItem.gpa}
                        location={educationItem.location}
                        graduationDate={educationItem.graduationDate}
                        id={educationItem.id}
                        key={educationItem.id}
                    />
                )
            })}
        </section>
    )
}

const stylingObject = {
    h3: {
        fontSize: "1rem",
        marginTop: "1rem"
    },
    div: {
        width: "100%",
        height: "2px",
        backgroundColor: "black",
        margin: "2px 0 1rem 0"
    },
}

export default EducationSection;