import React, {useState} from "react"
import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button.component"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"
import "./sign-in.styles.scss"

const SignIn = (props) => {
   
 const [state, setState] = useState({
     email:"",
     password: ""
 })
 
     async function handleSubmit (e)  {
        e.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(state.email, state.password)
           setState({
            email:"",
            password: ""
        })
        } catch (error) {
            console.log(error)
        }
    }
  
    function handleChange ( e) {
        const { value, name } = e.target
       setState({...state, [name]: value })
    }

        return (
            <div className="sign-in">
                <h2>Already have an account</h2>
                <span>
                    Sign in with your email and password
                </span>
                <form onSubmit={handleSubmit}>
                    <FormInput name="email"
                        type="email"
                        id={`${props.popup}signinEmail`}
                        value={state.email}
                        handleChange={handleChange}
                        label="Email" required />

                    <FormInput name="password"
                    id={`${props.popup}signinPassword`}
                        type="password" handleChange={handleChange}
                        value={state.password}
                        label="Password" required />
                    <div className="buttons">
                        <CustomButton type="submit"> SIGN IN
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    
}

export default SignIn