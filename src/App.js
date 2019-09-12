import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.style.css'
// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { setCurrentUser } from './redux/user/user.actions'
// utills
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// componets
import Header from './components/header/header.comp'
// pages
import HomePage from './pages/home/home.comp'
import Shop from './pages/shop/shop.comp'
import CheckOut from './pages/checkout/checkout.comp'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.comp'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(userSnapShot => {
          setCurrentUser({ id: userSnapShot.id, ...userSnapShot.data() })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/checkout' component={CheckOut} />
          <Route
            exact
            path='/signin'
            render={() => (currentUser ? <Redirect to='/' /> : <SignInSignUp />)}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
