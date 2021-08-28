import React from "react"

import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button.component"

import { auth, createUserProfileDocument, signInWithGoogle} from "../../firebase/firebase.utils"
import "./sign-up.styles.scss"

class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""

        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("password don't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        id={displayName}
                        onChange={this.handleChange}
                        required
                        label="Display name"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        id="signupEmail"
                        onChange={this.handleChange}
                        required
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        id="signupPassword"
                        onChange={this.handleChange}
                        required
                        label="password"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        id="confirmPassword"
                        onChange={this.handleChange}
                        required
                        label="Confirm Password"
                    />
                    <div className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN UP WITH GOOGLE
                        </CustomButton></div>
                </form>
            </div>
        )
    }

}

export default SignUp;
