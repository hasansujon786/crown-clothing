import { Route, Switch } from 'react-router-dom'
import React from 'react'
import './App.css'
import Header from './components/header/header.comp'
import HomePage from './pages/home/home.comp'
import Shop from './pages/shop/shop.comp'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.comp'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  )
}

export default App
