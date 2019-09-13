import React, { Component } from 'react'
import './Sign-Up.style.scss'
import FromInput from '../Form-Input/Form-Input.comp'
import Button from '../custom-button/custom-button.comp'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleSumbmit = async event => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("Password didn't matched.")
      return
    }
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    await createUserProfileDocument(user, { displayName })
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an accoun.</h2>
        <span>Sign up with your email and password.</span>
        <form onSubmit={this.handleSumbmit}>
          <FromInput
            type='text'
            name='displayName'
            label='Display Name'
            required
            onChange={this.handleChange}
            value={displayName}
          />
          <FromInput
            type='email'
            name='email'
            label='Email'
            required
            onChange={this.handleChange}
            value={email}
          />
          <FromInput
            type='password'
            name='password'
            label='Password'
            required
            onChange={this.handleChange}
            value={password}
          />
          <FromInput
            type='password'
            name='confirmPassword'
            label='Confirm Password'
            required
            onChange={this.handleChange}
            value={confirmPassword}
          />

          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    )
  }
}

export default SignUp
