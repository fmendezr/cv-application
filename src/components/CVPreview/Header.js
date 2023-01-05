import React from "react";

const Header = (props) => {
    return (
        <div style={stylingObject.div}>
            <h1 style={stylingObject.h1}>{props.firstName} {props.lastName}</h1>
            <p style={stylingObject.p}>{props.address}</p>
            <p style={stylingObject.p}>Phone: {props.phone} Email: {props.email}</p>
        </div>
    )
}

const stylingObject = {
    div: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    h1: {
        fontWeight: "bold",
        fontSize: "1.8rem"
    },
    p: {
        fontSize: "0.9rem"
    }
}

export default Header;