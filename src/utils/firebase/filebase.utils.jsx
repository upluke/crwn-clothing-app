import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
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

const googleProvider =new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: "select_account" // every time somebody interacts with our provider, we want to always force them to select an account
})

export const auth = getAuth() // why auth just a funciton invocation without the new keyword, whereas GoogleAuthProvider is one. So GoogleAuthProviders is a class sometimes you want to generate multiple of these different providers because you might have different provider instances doing different things. Authentication on the other hand, the rules for authentication that communicaates with Firebase shoudl always be the same one for every applicaiton.
export const signInWithGooglePopup=()=>signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth, googleProvider)

export const db =getFirestore() //directly points to our database 

export const createUserDocumentFromAuth=async(userAuth)=>{ // this method receives some user authentication object 
    // take the data from authenticiation service and store that inside of fire store
    if(!userAuth) return; // if we don't get userAuth, we dont' run the funciton

    // 1. see if there is an existing document reference
    const userDocRef=doc(db, 'users', userAuth.uid) // 1st arg is database, 2nd arg is collections, 3rd is an identifier that helps get a document reference
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef) // the snapshot is kind of like the data and also a specific kind of object
    console.log(userSnapshot)

    // if user data doesn't exist, create/set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt =new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('error creating the user', error.message)
        }
    }
    // check if user data exists, return userDocRef
    return userDocRef;
}


export const createAuthUserWithEmailAndPassword=async (email, password)=>{
    if(!email || !password) return; 
    createUserWithEmailAndPassword(auth, email, password)
}