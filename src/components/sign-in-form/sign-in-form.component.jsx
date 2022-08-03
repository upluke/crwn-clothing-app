import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
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
        <form>
        <h1>Sigin form</h1>
        <FormInput label="email" type="email" value={email} name="mail" onChange={handleChange} />
        <FormInput label="password" type="password" value={password} name="password" onChange={handleChange} />
        <Button>SIGN IN</Button>
        <Button buttonType="google">SIGN IN WITH GOOGLE</Button>
        </form>
      
    )
}

export default SignInForm