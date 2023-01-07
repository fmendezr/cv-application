const EducationItem = (props) => {
    return (
        <div style={stylingObject.div}>
            <div style={stylingObject.leftSide}>
                <p>{props.university}</p>
                <p>{props.degree}</p>
                <p>GPA: {props.gpa}</p>
            </div>
            <div style={stylingObject.rightSide}>
                <p>{props.location}</p>
                <p>{props.graduationDate}</p>
            </div>
        </div>
    )
}

const stylingObject = {
    div: {
        display: "flex",
        marginTop: "1rem",
        justifyContent: "space-between"
    },
    rightSide: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
    leftSide: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "3rem"
    }
}

export default EducationItem;