import React from 'react';
import SignInForm from '../../components/sign-in-form/signin.component';
import SignUpForm from '../../components/sign-up-form/signup.component';
import './authentication.styles.scss'

 const Auth = () => {
  return (
    <div className='authentication_container'>
     <SignInForm/>
     <SignUpForm/>
    </div>
  )
};

export default Auth;