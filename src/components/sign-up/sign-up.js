import React from "react"

import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button.component"

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import "./sign-up.styles.scss"

class SignUp extends React.Component {

    constructor(){
        super()


        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword:""

        }
    }


    render(){
        const { displayName, email, password, confirmPassword}=this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    required
                    label="Display name"
                    />
                      <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                    label="Email"
                    />
                      <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    required
                    label="password"
                    />
                      <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    required
                    label="Confirm Password"
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            
             
            </div>
        )
    }

}

export default SignUp;
