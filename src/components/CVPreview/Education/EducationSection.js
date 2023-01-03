import React from "react"
import EducationItem from "./EducationItem"

const EducationSection = (props) => {
    return (
        <section>
            <h3>Education</h3>
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

export default EducationSection;