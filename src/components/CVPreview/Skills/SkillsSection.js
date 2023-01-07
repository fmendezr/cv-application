import SkillsItem from "./SkillsItem";

const SkillsSection = (props) => {
    return (
        <section>
            <h3 style={stylingObject.h3}>SKILLS</h3>
            <div style={stylingObject.div}></div>
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

export default SkillsSection;