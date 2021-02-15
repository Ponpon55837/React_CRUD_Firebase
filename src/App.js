import React from 'react'
import { useContext, useState, useEffect } from 'react';
import Navbar from './layoutComponents/Navbar'
import Footer from './layoutComponents/Footer'
import Contacts from './pageComponents/Contacts/Contacts'
import Profile from './pageComponents/Profile/ProfilePage'
import SignIn from './pageComponents/SignIn/SignIn'
import SignUp2 from './pageComponents/SignUp/SignUp2'
import NotLogIn from './pageComponents/NotLogInPage'
import { projectAuth } from "./firebase/Config"
import { bgStyle } from './style/style'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from 'react-bootstrap'

const AuthContext = React.createContext()
export const useAuth = () => {
  return useContext(AuthContext)
}

const App = () => {
  const [currentUser, setCurrentUser] = useState()
  
  const [page, setPage] = useState('NotLogIn')

  useEffect(() => {
    projectAuth.onAuthStateChanged(userAuth => {
      userAuth ? setCurrentUser(userAuth) : setCurrentUser(null)
    })
  },[])

  if(!currentUser) {
    return (
      <AuthContext.Provider value={currentUser} >
        <div style={bgStyle}>
        <Navbar currentUser={currentUser} setPage={setPage} />
        <Container className='mt-3'>
          { page === 'NotLogIn' ? <NotLogIn /> : <SignIn /> }
        </Container>
        <Footer />
        </div>
      </AuthContext.Provider>
    )
  }

  return (
    <AuthContext.Provider value={currentUser}>
      <div style={bgStyle}>
        <Navbar currentUser={currentUser} setPage={setPage} />
        <BrowserRouter>
          <Switch>
            <Route path='/contacts'>
              <Contacts />
            </Route>
           
            <Route path='/'>
              <Profile currentUser={currentUser} />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App
