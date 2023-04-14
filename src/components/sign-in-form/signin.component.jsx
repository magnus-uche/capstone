import React, { useState } from 'react';
import FormInput from '../form_input/form_input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {SigninForm,ButtonContainer } from './signin.styles';

import {
  signInAuthUserEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const resetForm = () => {
    setFormField(defaultFormFields);
  };

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormField({ ...formField, [name]: value });
  };

  const signWithGoogle = async () => {
    // sign in with google popup
   await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // sign in with password and email
      const res  = await signInAuthUserEmailAndPassword(email, password);

      resetForm();
    } catch (error) {
      // handle error 
      if (error.code === "auth/wrong-password") {
        alert('incorrect email or password')
      } else if (error.code === 'auth/user-not-found') {
        alert('user not found please input email/password')
      } else {
        console.log('error.message :>> ', error.message);
      }
    }
  };

  return (
    <SigninForm>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} >
        <FormInput
          label='Email'
          type='email'
          name="email"
          value={email}
          required
          onChange={onChange}
        />

        <FormInput
          label='Password'
          type='password'
          name="password"
          value={password}
          required
          onChange={onChange}
        />

        <ButtonContainer>
          <Button type='submit'>SIGN IN</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signWithGoogle}>GOOGLE SIGN IN</Button>
        </ButtonContainer>
      </form>
    </SigninForm>
  )
};

export default SignInForm;