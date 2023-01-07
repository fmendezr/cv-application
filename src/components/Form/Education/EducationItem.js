const EducationItem = (props) => {
    return (
        <div style={stylingObject.div}>
            <input id={props.id} name="university" type="text" placeholder="University Name" value={props.educationItem.university} onChange={props.onEducationChange}></input>
            <input id={props.id} name="degree" type="text" placeholder="Degree" value={props.educationItem.degree} onChange={props.onEducationChange}></input>
            <input id={props.id} name="gpa" type="text" step="0.1" max="4.0" placeholder="GPA" value={props.educationItem.gpa} onChange={props.onEducationChange}></input>
            <input id={props.id} name="location" type="text" placeholder="Location" value={props.educationItem.location} onChange={props.onEducationChange}></input>
            <input id={props.id} name="graduationDate" type="text" placeholder="Graduation Date" value={props.educationItem.graduationDate} onChange={props.onEducationChange}></input>
            <button style={stylingObject.btn} id={props.id} onClick={props.onEducationDelete}> Delete </button>
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

export default EducationItem;