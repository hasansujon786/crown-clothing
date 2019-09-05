import './sigin-in.style.scss'
import React, { Component } from 'react'
import FromInput from '../../components/form-input/form-input.comp'
import Button from '../../components/custom-button/custom-button.comp'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
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

          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn
