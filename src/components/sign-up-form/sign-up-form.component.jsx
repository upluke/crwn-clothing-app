
import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/filebase.utils"
import "./sign-up-form.styles.scss"


const defaultForFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm =()=>{


    const [formFields, setFormFields] =useState(defaultForFields)
    const {displayName, email, password, confirmPassword} = formFields

    const resetFormFields=()=>{
        setFormFields(defaultForFields)
    }
 
    const handleSubmit=async (event)=>{
        event.preventDefault()
        if (password!==confirmPassword){
            alert("passwords do not match")
            return 
          
        }
        try{
            const {user}=await createAuthUserWithEmailAndPassword(email, password)  
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        }catch(error){
            if (error.code === 'auth/email-already-in-use'){ // customize an error code for duplicated emails
                alert('Cannot create user, email already in use')
            }else{
               console.log('user creation encoutered an error', error)
            }
            
        }
     
    }

    const handleChange=(event)=>{
        const {name, value} = event.target 
        setFormFields({...formFields, [name]:value})
    }

    
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* (^) Another method: pass input args as an obj: */}
                {/* <FormInput 
                    label="Display name" 
                    inputOptions={{
                        type:"text",
                        required:true,
                        onChange:handleChange,
                        name:"displayName",
                        value:displayName
                    }}
                   /> */}

                <FormInput label="Display name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required  autoComplete="on" onChange={handleChange} name="password" value={password}/>
                <FormInput label="Comfirm Password" type="password" required  autoComplete="on" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm




