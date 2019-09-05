import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './crown.svg'
import { auth } from '../../firebase/firebase.utils'

const HeaderComp = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <button onClick={() => auth.signOut()} className='option'>
            SIGN OUT
          </button>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default HeaderComp
