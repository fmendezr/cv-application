import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = (props) => {
    return (
        <section>
            <h3>Experience</h3>
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

export default ExperienceSection;