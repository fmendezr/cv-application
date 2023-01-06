import React from "react";
import logo from "../components/github.svg"

const Footer = () => {
    return (
        <footer style={stylingObject.footer}> 
            <a href="https://github.com/fmendezr"><p style={stylingObject.p}>Copyright &#169; fmendez <img style={stylingObject.img} src={logo} /></p></a>
        </footer>
    )
}

const stylingObject = {
    img: {
        height: "1.3rem"
    },
    p: {
        fontSize: "1.5rem",
        color: "#000033",
    },
    footer: {
        margin: "1rem 0rem",
        display: "flex",
        justifyContent: "center"
    }  
}

export default Footer;