import { useState } from "react"
import FormInput from "../form-input/form-input.component"

const initValue={
    email:'',
    password:''
}

const SignInForm=()=>{
    
    const [formFields, setFormFields]=useState(initValue)
    const {email, password}= formFields
    

    const handleChange=(e)=>{
        setFormFields({...formFields, [e.target.name]:e.target.value})
    }

    return(
        <div>
        <h1>Sigin form</h1>
        <FormInput label="email" type="email" value={email} name="email" onChange={handleChange} />
        <FormInput label="password" type="password" value={password} name="password" onChange={handleChange} />
        </div>
      
    )
}

export default SignInForm