import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
  const {user} = await signInWithGooglePopup();
  console.log('response :>> ', user);
    createUserDocumentFromAuth(user);
  }

  return (
    <div>
    <h1>Sign in page</h1>
     <button onClick={logGoogleUser}>sign with google popup</button>
    </div>
  )
}

export default SignIn;