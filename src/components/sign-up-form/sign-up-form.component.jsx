
import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/filebase.utils"



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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
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




