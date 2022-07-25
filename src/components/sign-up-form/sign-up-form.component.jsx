
import { useState } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/filebase.utils"


const defaultForFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm =()=>{


    const [formFields, setFormFields] =useState(defaultForFields)
    const {displayName, email, password, confirmPassword} = formFields

    const handleChange=(event)=>{
        const {name, value} = event.target 
        setFormFields({...formFields, [name]:value})
    }

 
    const handleSubmit=async (event)=>{
        event.preventDefault()
 
        // 1. confirm the password matches 
        // 2. see if we've authenticated taht suer with email and password. 
        //Then we want to create a user document from what the createAuthUserWithEmailAndPassword returns
        if (password!==confirmPassword){
            alert("passwords do not match")
            return 
          
        }
        try{
            const response=await createAuthUserWithEmailAndPassword(email, password)
            console.log(response.user)
        }catch(error){
            console.log('user creation encoutered an error', error)
        }
     
    }

    
    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <label>Email </label>
                <input type="email" required onChange={handleChange} name="email" value={email}/>
                <label>Password: </label>
                <input type="password" required  autoComplete="on" onChange={handleChange} name="password" value={password}/>
                <label>Comfirm Password</label>
                <input type="password" required  autoComplete="on" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm