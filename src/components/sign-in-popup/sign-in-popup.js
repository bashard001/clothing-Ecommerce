import React, { useEffect } from "react"
import "./sign-in-popup.styles.scss"
import SignIn from "../sign-in/sign-in"
import { setAsGuest, setModalState } from "../../redux/user/user.actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const SignInPopup = ({ setAsGuest, currentUser, popup, setModalState }) => {

    useEffect(() => {
        function timeFunc() {

            if (currentUser && document.querySelector(".popup")) {
                console.log("account login")
                setModalState(false)
            } else {
                setTimeout(() => {
                    setModalState(true)
                }, 3000)
            }
        }

        timeFunc()
    }, [currentUser])

    return (
        <div className="popup">
            <div className="popupCard">
                <SignIn popup={popup} />
                <div className="btnGroup">
                    <div className="guest">Continue as a <p style={{ display: "inline", cursor: "pointer", textDecoration: "underline" }} onClick={() => setAsGuest()}>Guest</p> </div>
                    <Link onClick={() => setAsGuest()} to="/signin"><div className="createBtn">Create an account</div></Link>
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
        setAsGuest: () => dispatch(setAsGuest()),
        setModalState: (modal) => dispatch(setModalState(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPopup)