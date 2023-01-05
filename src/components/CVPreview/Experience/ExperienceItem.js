import React from "react";

const ExperienceItem = (props) => {
    return(
        <div style={stylingObject.div}>
            <div style={stylingObject.leftSide}>
                <p>{props.company}</p>
                <p style={stylingObject.p}>{props.position}</p>
            </div>
            <div style={stylingObject.rightSide}>
                <p>{props.location}</p>
                <p>{props.from} - {props.to}</p>
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
    },
    p: {
        marginLeft: "1.5rem",
        fontStyle: "italic"
    }
}
export default ExperienceItem;