import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAYxBKTuy9fUOz3lGMExaUfVYEoPREDANs",
    authDomain: "react-crud-fcfb1.firebaseapp.com",
    databaseURL: "https://react-crud-fcfb1.firebaseio.com",
    projectId: "react-crud-fcfb1",
    storageBucket: "react-crud-fcfb1.appspot.com",
    messagingSenderId: "206599953779",
    appId: "1:206599953779:web:8eeba1c73e061611bb7906",
    measurementId: "G-XJKY6R01YT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const projectDB = firebase.database().ref()
  export const porjectAuth = firebase.auth()
  export const projectStorage = firebase.storage()
  export const projectFirestore = firebase.firestore()
  export const timestamp = firebase.firestore.FieldValue.serverTimestamp

  // 使用google註冊
  export const porjectAuthGoogle = new firebase.auth.GoogleAuthProvider()
  porjectAuthGoogle.setCustomParameters({
    promt: "select_account",
  })
  // 使用email跟password註冊
  export const signUpWithEmail = (email, password) => porjectAuth.createUserWithEmailAndPassword(email, password)

  export const createUserProfileDocument = async (userAuth:any) => {
    if(!userAuth) return

    const userReference =  projectFirestore.doc(`users/${userAuth.uid}`)
    const snapShot =  await userReference.get()
    if(!snapShot.exists) {
      const {displayName, email} = userAuth
      const createdAt = new Date()
      try {
        await userReference.set({
          displayName,
          email,
          createdAt
        })
      } catch (error) {
        console.log(error)
      }
    }
   return userReference
  }

  // 用google登入
  export const signInWithGoogle = () => porjectAuth.signInWithPopup(porjectAuthGoogle)
  // 使用email跟password登入
  export const signInWithEmail = (email, password) =>    porjectAuth.signInWithEmailAndPassword(email, password)
  export const signOut = () => porjectAuth.signOut()
  // 重設email跟pasword
  export const resetEmail = (email) => porjectAuth.sendPasswordResetEmail(email);
  export const resetPassword = (password) =>    porjectAuth.currentUser.updatePassword(password)
