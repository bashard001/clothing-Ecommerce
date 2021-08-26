import React, { useEffect } from "react"
import "./sign-in-popup.styles.scss"
import SignIn from "../sign-in/sign-in"
import { setAsGuest } from "../../redux/user/user.actions"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"

const SignInPopup = ({ setAsGuest, isUser, currentUser }) => {

    function timeFunc() {
        console.log(isUser)
        // props.setAsGuest()

        if (currentUser && document.querySelector(".popup")) {
            console.log("account login")
            document.querySelector(".popup").style.display = "none"
        } else {
            setTimeout(() => {
                document.querySelector(".popup").style.display = "flex"
            }, 3000)
        }

    }

    useEffect(() => {
        timeFunc()
    }, [currentUser])

    return (
        <div className="popup">
            <div className="popupCard">
                <SignIn />
                <div className="btnGroup">
                    <div className="guest">continue as a <p style={{ display: "inline", cursor: "pointer" , textDecoration: "underline"}} onClick={() => setAsGuest()}>Guest</p> </div>
                   <Link onClick={() => setAsGuest() } to="/signin"><div className="createBtn">Create an account</div></Link> 
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
    isGuest: user.isGuest

})

const mapDispatchToProps = dispatch => {
    return {
        setAsGuest: () => dispatch(setAsGuest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPopup)