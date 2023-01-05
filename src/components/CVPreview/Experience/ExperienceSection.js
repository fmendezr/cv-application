import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = (props) => {
    return (
        <section>
            <h3 style={stylingObject.h3}>EXPERIENCE</h3>
            <div style={stylingObject.div}></div>
            {props.experience.map((experienceItem) => {
                return (
                    <ExperienceItem 
                        company={experienceItem.company}
                        position={experienceItem.position}
                        location={experienceItem.location}
                        from={experienceItem.from}
                        to={experienceItem.to}
                        id={experienceItem.id}
                        key={experienceItem.id}
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

export default ExperienceSection;