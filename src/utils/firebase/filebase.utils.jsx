import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
// getDoc or setDoc mean get the data of Doc and set the data of Doc
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAuyajxJSkYQPsQJgRf7LVF_tW0xHxfEtQ",
    authDomain: "crwn-clothing-db-47196.firebaseapp.com",
    projectId: "crwn-clothing-db-47196",
    storageBucket: "crwn-clothing-db-47196.appspot.com",
    messagingSenderId: "289012467296",
    appId: "1:289012467296:web:5ef950a6059b6409276505"
  };
  
  
const firebaseApp = initializeApp(firebaseConfig);

const provider =new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account" // every time somebody interacts with our provider, we want to always force them to select an account
})

export const auth = getAuth() // why auth just a funciton invocation without the new keyword, whereas GoogleAuthProvider is one. So GoogleAuthProviders is a class sometimes you want to generate multiple of these different providers because you might have different provider instances doing different things. Authentication on the other hand, the rules for authentication that communicaates with Firebase shoudl always be the same one for every applicaiton.
export const signInWithGooglePopup=()=>signInWithPopup(auth, provider)

export const db =getFirestore() //directly points to our database 

export const createUserDocumentFromAuth=async(userAuth)=>{ // this method receives some user authentication object 
    // take the data from authenticiation service and store that inside of fire store
    // 1. see if there is an existing document reference
    const userDocRef=doc(db, 'users', userAuth.uid) // 1st arg is database, 2nd arg is collections, 3rd is an identifier that helps get a document reference
    console.log(userDocRef)
}