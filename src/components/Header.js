import React from "react";

const Header = () => {
    return (
        <header style={stylingObject.header}>
            <h1 style={stylingObject.h1}>CV Application</h1>
        </header>
    ) 
}

const stylingObject = {
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        padding: "1rem"
    }, 
    h1: {
        fontSize: "3rem",
        color: "#000033",
        fontWeight: "bold",
        padding: "0.5rem 0.75rem",
        borderTop: "5px solid rgba(0, 0, 44, 0.326)",
        borderBottom: "5px solid rgba(0, 0, 44, 0.326)"
    }
}

export default Header;