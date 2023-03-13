import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

// instance for firestore
import {
    getFirestore,
    doc,
    getDoc, 
    setDoc,
} from 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT3bZ-C3_XfOfv6vZn6PIH8y1m8t33FYE",
    authDomain: "mystyle--db.firebaseapp.com",
    projectId: "mystyle--db",
    storageBucket: "mystyle--db.appspot.com",
    messagingSenderId: "687310887559",
    appId: "1:687310887559:web:7b19b2dbe82e70a9157622"
};

// Initialize Firebase (sdk. 'developer kits')i.e javascript library that help extract some of the funtionality that we need in other to intract with the firebase. CRUD opereation.
const firebaseApp = initializeApp(firebaseConfig);

// initialize a provider 
const googleProvider = new GoogleAuthProvider();

// set custom parameters
googleProvider.setCustomParameters({
    prompt: "select_account"
});

// create the authentication
export const auth = getAuth();

// sign in with popup 
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// get firebase database. point to database
export const db = getFirestore();

// create a user method async function that recives user authentication object
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return;

    // check if there's an existing reference.
    // on the doc methed is databse'getfirestore()', second is collection, third is an identifier.
    const userDocRef = doc(db, 'users', userAuth.uid);
    
   // the getDoc method will get the data related to document
    const userSnapshot =  await getDoc(userDocRef);

    // check if user data exists 
    // create / set 'setDoc()' the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try { 
            // set the document from the snapshot 
            await setDoc(userDocRef, {
            displayName,
            email,
            createAt,
            ...additionalInfo
            });
        } catch (error) {

        console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
}


// Note :  a collection consist of document and inside document is our data

