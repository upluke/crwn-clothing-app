
import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/filebase.utils"
import "./sign-in-form.styles.scss"


const defaultForFields={
    email:'',
    password:''
}

const SignInForm =()=>{


    const [formFields, setFormFields] =useState(defaultForFields)
    const {email, password} = formFields

    const resetFormFields=()=>{
        setFormFields(defaultForFields)
    }

    const signInWithGoogle=async ()=>{
        const {user}= await signInWithGooglePopup()  
        await createUserDocumentFromAuth(user)
    }
 
 
    const handleSubmit=async (event)=>{
        event.preventDefault()
    
        try{
      
            resetFormFields()
        }catch(error){
          
            
        }
     
    }

    const handleChange=(event)=>{
        const {name, value} = event.target 
        setFormFields({...formFields, [name]:value})
    }

    
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required  autoComplete="on" onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm




