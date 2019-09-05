import { Route, Switch } from 'react-router-dom'
import React from 'react'
import './App.css'
import Header from './components/header/header.comp'
import HomePage from './pages/home/home.comp'
import Shop from './pages/shop/shop.comp'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.comp'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
