import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import './App.style.css'
import Header from './components/header/header.comp'
import HomePage from './pages/home/home.comp'
import Shop from './pages/shop/shop.comp'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.comp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
