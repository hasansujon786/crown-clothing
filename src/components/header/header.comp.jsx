import React from 'react'
// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectHidden } from '../../redux/cart/cart.selectors'
// other
import { auth } from '../../firebase/firebase.utils'
// components
import { ReactComponent as Logo } from './crown.svg'
import CartIcon from '../Cart-Icon/Cart-Icon.comp'
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown.comp'

// styles
import { HeaderWrapper, OptinsWrapper, Option, Logocontainer } from './Header.style'

const HeaderComp = ({ currentUser, hidden }) => {
  return (
    <HeaderWrapper>
      <Logocontainer to='/'>
        <Logo className='logo' />
      </Logocontainer>
      <OptinsWrapper>
        <Option to='/shop'>SHOP</Option>
        <Option to='/contact'>CONTACT</Option>
        {currentUser ? (
          <>
            <Option title={currentUser.email} to='/'>
              {currentUser.displayName.toUpperCase()}
            </Option>

            <Option onClick={() => auth.signOut()}>SIGN OUT</Option>
          </>
        ) : (
          <Option to='/signin'>SIGN IN</Option>
        )}
        <CartIcon />
      </OptinsWrapper>
      {hidden ? null : <CartDropdown />}
    </HeaderWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
})

export default connect(mapStateToProps)(HeaderComp)
