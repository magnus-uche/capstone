import React from 'react';
import SignInForm from '../../components/sign-in-form/signin.component';
import SignUpForm from '../../components/sign-up-form/signup.component';
import {Authentication} from './authentication.styles'

 const Auth = () => {
  return (
    <Authentication>
     <SignInForm/>
     <SignUpForm/>
    </Authentication>
  )
};

export default Auth;