const ObjectiveSection = (props) => {
    return (
        <section>   
            <h3 style={stylingObject.h3}>OBJECTIVE</h3>
            <div style={stylingObject.div}></div>
            <p style={stylingObject.p}>{props.objective}</p>
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
    p: {
        fontSize: "1rem",
        marginLeft: "3rem"
    }
}

export default ObjectiveSection;