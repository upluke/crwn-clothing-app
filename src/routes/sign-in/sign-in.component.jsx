import { useEffect } from "react"
import {getRedirectResult} from 'firebase/auth'

import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/filebase.utils"




const SignIn=()=>{
    useEffect(()=>{
       async function fetchData(){
        const response= await getRedirectResult(auth)
        if (response){
            const userDocRef=await createUserDocumentFromAuth(response.user)
        }
       }
       fetchData()
      
    },[])

    const logGoogleUser=async ()=>{
        const {user}= await signInWithGooglePopup()  
        const userDocRef = await createUserDocumentFromAuth(user)
    }
 

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sigin in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sigin in with Google Redirect</button>
        </div>
    )
}

export default SignIn