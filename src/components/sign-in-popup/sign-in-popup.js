import React, {useEffect} from "react"
import "./sign-in-popup.styles.scss"
import SignIn from "../sign-in/sign-in"
import { setAsGuest } from "../../redux/user/user.actions"
import { connect } from "react-redux"

const SignInPopup = ({setAsGuest, isUser, currentUser}) => {

    function timeFunc() {
        console.log(isUser)
        // props.setAsGuest()
       
        if(currentUser && document.querySelector(".popup") !== null){
            console.log("account login")
            document.querySelector(".popup").style.display = "none"
        }else{
         setTimeout(()=>{ 
        document.querySelector(".popup").style.display = "flex"
       },3000)
        }
    
    }
           
    useEffect(()=>{
         timeFunc()
    },[currentUser])

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
    currentUser: user.currentUser,
    isGuest: user.isGuest

})

const mapDispatchToProps = dispatch => {
    return {
        setAsGuest: () => dispatch(setAsGuest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPopup)