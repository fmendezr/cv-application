const SkillsItem = (props) => {
    return (
        <div style={stylingObject.div}>
            <select style={stylingObject.select} id={props.id} name="type" value={props.skillsItem.type} onChange={props.onSkillsChange}>
                <option id={props.id} name="type" value="Databases">Databases</option>
                <option id={props.id} name="type" value="Frameworks">Frameworks</option>
                <option id={props.id} name="type" value="Languages">Languages</option>
                <option id={props.id} name="type" value="Libraries">Libraries</option>
                <option id={props.id} name="type" value="Operating Systems">Operating Systems</option>
                <option id={props.id} name="type" value="Platforms">Platforms</option>
                <option id={props.id} name="type" value="Other">Other</option>
            </select>
            <input id={props.id} name="description" placeholder="Specify here" value={props.skillsItem.description} onChange={props.onSkillsChange}></input>
            <button style={stylingObject.btn} id={props.id} onClick={props.onSkillsDelete}>Delete</button>
        </div>
    )

}

const stylingObject = {
    div: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    select: {
        height: "1.75rem",
        font: "1.25rem",
        border: "none"
    },
    btn: {
        height: "1.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "2px solid #000033",
        backgroundColor: "rgba(0, 0, 44, 0.326)"
    }
}

export default SkillsItem;