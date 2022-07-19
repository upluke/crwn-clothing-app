import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/filebase.utils"
const SignIn=()=>{
    const logGoogleUser=async ()=>{
        const {user}= await signInWithGooglePopup()
        // console.log(response)
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sigin in with Google Popup</button>
        </div>
    )
}

export default SignIn