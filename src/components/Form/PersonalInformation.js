const PersonalInformationSection = (props) => {
    return (
        <section style={stylingObject.section}>
            <h3 style={stylingObject.h3}>Personal Information</h3>
            <input name="firstName" placeholder="First Name" type="text" value={props.personalInfoItem.firstName} onChange={props.onPersonalChange}></input>
            <input name="lastName" placeholder="Last Name" type="text" value={props.personalInfoItem.lastName} onChange={props.onPersonalChange}></input>
            <input name="email" placeholder="Email" type="email" value={props.personalInfoItem.email} onChange={props.onPersonalChange}></input>
            <input name="phone" placeholder="Phone Number" type="tel" value={props.personalInfoItem.phone} onChange={props.onPersonalChange}></input>
            <input name="address" placeholder="Address" type="text" value={props.personalInfoItem.address} onChange={props.onPersonalChange}></input>
            <input name="goal" placeholder="Goal" value={props.personalInfoItem.goal} onChange={props.onPersonalChange}></input>
        </section>
    )
}

const stylingObject = {
    section: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "1rem", 
    },
    h3: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#000033"
    }
}

export default PersonalInformationSection;