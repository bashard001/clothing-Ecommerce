import React from "react"
import "./sign-in-popup.styles.scss"
import SignIn from "../sign-in/sign-in"
import { setAsGuest } from "../../redux/user/user.actions"
import { connect } from "react-redux"

const SignInPopup = ({ setAsGuest , currentUser}) => {

    function timeFunc() {
        if (!currentUser) {
            setTimeout(() => {
       console.log(currentUser)
                document.querySelector(".popup").style.display = "flex";
            }, 4000);
        }
        else {
            console.log("guest access")
        }

    }
    timeFunc()

    return (
        <div className="popup">
            <div className="popupCard">
                <SignIn />
                <div className="guest">continue as a <p style={{ display: "inline" }} onClick={() => setAsGuest()}>guest</p> </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser

})

const mapDispatchToProps = dispatch => {
    return {
        setAsGuest: () => dispatch(setAsGuest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPopup)