import './header.style.scss'
import React from 'react'
// redux
import { connect } from 'react-redux'
// other
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
// components
import { ReactComponent as Logo } from './crown.svg'
import CartIcon from '../cart-icon/cart-icon.comp'
import CartDropdown from '../cart-dropdown/cart-dropdown.comp'

const HeaderComp = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(HeaderComp)
