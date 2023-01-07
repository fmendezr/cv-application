const ExperienceItem = (props) => {
    return (
        <div style={stylingObject.div}>
            <input id={props.id} name="company" type="text" placeholder="Company" value={props.experienceItem.company} onChange={props.onExperienceChange}></input>
            <input id= {props.id} name="position" type="text" placeholder="Position" value={props.experienceItem.position} onChange={props.onExperienceChange}></input>
            <input id={props.id} name="location" type="text" placeholder="Location" value={props.experienceItem.location} onChange={props.onExperienceChange}></input>
            <input id={props.id} name="from" type="text" placeholder="From" value={props.experienceItem.from} onChange={props.onExperienceChange}></input>
            <input id={props.id} name="to" type="text" placeholder="To" value={props.experienceItem.to} onChange={props.onExperienceChange}></input>
            <button style={stylingObject.btn} id={props.id} onClick={props.onExperienceDelete}>Delete</button>
        </div>
    )
}

const stylingObject = {
    div: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    btn: {
        height: "1.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "2px solid #000033",
        backgroundColor: "rgba(0, 0, 44, 0.326)"
    }
}

export default ExperienceItem;