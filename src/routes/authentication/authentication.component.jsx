import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/filebase.utils"

import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"



const Authentication=()=>{

    const logGoogleUser=async ()=>{
        const {user}= await signInWithGooglePopup()  
        const userDocRef = await createUserDocumentFromAuth(user)
    }
 

    return (
        <div>
            <h1>Sign In Page</h1>
            <SignInForm />

            <button onClick={logGoogleUser}>Sigin in with Google Popup</button>
            <SignUpForm />
        </div>
    )
}

export default Authentication