import { useState } from "react"

const SignUpForm =()=>{
    const initData={
        email:'',
        password:'',
        password_confirmed:''
    }

    const [inputItem, setInputItem] =useState(initData)
    const {email, password, password_confirmed} = inputItem

    const handleChange=(event)=>{
        const {name, value} = event.target
        setInputItem({...inputItem, [name]:value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(email,"---",password,"----", password_confirmed)
    }

    
    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type="email" required name="email" onChange={handleChange} />
                <label>password: </label>
                <input type="password" required name="password" autoComplete="on" onChange={handleChange} />
                <label>comfirmed password: </label>
                <input type="password" required name="password_confirmed" autoComplete="on" onChange={handleChange} />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm