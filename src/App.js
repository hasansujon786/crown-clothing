import { Route, Switch } from 'react-router-dom'
import React from 'react'
import './App.css'
import HomePage from './pages/home/home.comp'
import Shop from './pages/shop/shop.comp'
import Header from './components/header/header.comp'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App
