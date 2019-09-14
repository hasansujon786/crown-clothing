import React, { Component } from 'react'
import './Sign-In.style.scss'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
// components
import FromInput from '../../components/Form-Input/Form-Input.comp'
import Button from '../../components/Custom-Button/Custom-Button.comp'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)

      this.setState({ email: '', password: '' })
    } catch (err) {
      console.log(err)
    }
  }
  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an accout?</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FromInput
            handleChange={this.handleChange}
            type='email'
            name='email'
            value={this.state.email}
            id='email'
            label='Email'
          />
          <FromInput
            handleChange={this.handleChange}
            type='password'
            name='password'
            value={this.state.password}
            id='password'
            label='Password'
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button google onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
