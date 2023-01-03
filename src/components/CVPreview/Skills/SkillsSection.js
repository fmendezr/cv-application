import React from "react";
import SkillsItem from "./SkillsItem";

const SkillsSection = (props) => {
    return (
        <section>
            <h3>Skills</h3>
            {props.skills.map((skillsItem) => {
                return(
                    <SkillsItem 
                        type={skillsItem.type}
                        description={skillsItem.description}
                        id={skillsItem.id}
                        key={skillsItem.id}
                    />
                )
            })}
        </section>
    )
}

export default SkillsSection;