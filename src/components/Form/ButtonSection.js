const ButtonSection = (props) => {
    return (
        <section style={stylingObject.section}>
            <button style={stylingObject.btn} onClick={props.onReset}> Reset</button>
            <button style={stylingObject.btn} onClick={props.onSample}> Sample CV</button>
        </section>
    )

}

const stylingObject = { 
    section: {
        display: "flex",
        justifyContent: "space-between"
    },
    btn: {
        width: "45%",
        height: "1.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "2px solid #000033",
        backgroundColor: "rgba(0, 0, 44, 0.326)"
    }
}

export default ButtonSection