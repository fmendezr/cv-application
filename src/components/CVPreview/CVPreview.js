import Header from "./Header";
import Content from "./Content";

const CV = (props) => {
    return(
        <div style={stylingObject.div}>
            <Header 
                firstName={props.information.personalInformation.firstName}
                lastName={props.information.personalInformation.lastName}
                address={props.information.personalInformation.address}
                phone={props.information.personalInformation.phone}
                email={props.information.personalInformation.email}
            />
            <Content 
                objective={props.information.personalInformation.goal}
                education={props.information.education}
                skills={props.information.skills}
                projects={props.information.projects}
                experience={props.information.experiece}
            />
        </div>
    )

}

const stylingObject = {
    div: {
        backgroundColor: "white",
        width: "635px",
        padding: "6rem 5rem"
    }
}

export default CV;