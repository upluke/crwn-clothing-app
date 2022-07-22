import { useState } from "react"

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

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(displayName,"---",email, "------",password,"----")
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm