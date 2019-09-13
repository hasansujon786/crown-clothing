import './sign-in-sign-up.style.scss'
import React from 'react'
import SignIn from '../../components/Sign-In/Sign-In.comp'
import SignUp from '../../components/Sign-Up/Sign-Up.comp'

const SignInSignUpPage = () => {
  return (
    <div className='sign-in-sign-up-page'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUpPage
