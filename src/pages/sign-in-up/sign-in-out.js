import React from "react"

import SignIn from "../../components/sign-in/sign-in"
import SignUp from "../../components/sign-up/sign-up"
import "./sign-in.style.scss"

const SignInSignOutPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <div className="line"></div>
        <SignUp />
    </div>
)

export default SignInSignOutPage