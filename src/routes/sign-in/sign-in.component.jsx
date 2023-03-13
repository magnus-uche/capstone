import React from 'react';

import SignUpForm from '../../components/sign-up-form/signup.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
 } from '../../utils/firebase/firebase.utils';

 
const SignIn = () => {
  const logGoogleUser = async () => {
    // sign in with google popup
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(user);
};

  return (
    <div>
    <h1>Sign in page</h1>
     <button onClick={logGoogleUser}>sign with google popup</button>
     
     <SignUpForm/>
    </div>
  )
};

export default SignIn;