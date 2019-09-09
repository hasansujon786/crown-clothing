import './header.style.scss'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from './crown.svg'

const HeaderComp = ({ currentUser }) => {
  console.log(currentUser)

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
          <>
            <Link title={currentUser.email} to='/' className='option'>
              {currentUser.displayName.toUpperCase()}
            </Link>

            <button onClick={() => auth.signOut()} className='option'>
              SIGN OUT
            </button>
          </>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HeaderComp)
