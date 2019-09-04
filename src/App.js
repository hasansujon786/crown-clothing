import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React from 'react'
import './App.css'
import HomePage from './pages/home-page/home-page.component'
import Shop from './pages/shop/shop.comp'

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
              <li>
                <Link to='/users/'>Users</Link>
              </li>
            </ul>
          </nav>

          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={Shop} />
        </div>
      </Router>
    </div>
  )
}

export default App
