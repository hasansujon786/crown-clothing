import './sign-in-sign-up.style.scss'
import React from 'react'
import SignIn from '../../components/sign-in/sign-in.comp'
import SignUp from '../../components/sign-up/sign-up.comp'

const SignInSignUpPage = () => {
  return (
    <div className='sign-in-sign-up-page'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUpPage
