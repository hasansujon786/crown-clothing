import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD8uHtc2DnaszzTyMrX2UrDET4LQ5qe4Pg',
  authDomain: 'clown-clothing.firebaseapp.com',
  databaseURL: 'https://clown-clothing.firebaseio.com',
  projectId: 'clown-clothing',
  storageBucket: '',
  messagingSenderId: '164875868956',
  appId: '1:164875868956:web:149fd5c8378b67264f78d9'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
