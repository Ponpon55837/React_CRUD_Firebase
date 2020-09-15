import React, { useState, useEffect } from 'react'
import Navbar from './layoutComponents/Navbar'
import Footer from './layoutComponents/Footer'
import Contacts from './pageComponents/Contacts/Contacts'
import Profile from './pageComponents/Profile/ProfilePage'
import SignIn from './pageComponents/SignIn/SignIn'
import NotLogIn from './pageComponents/NotLogInPage'
import { projectAuth } from "./firebase/Config"
import { bgStyle } from './style/style'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from 'react-bootstrap'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  // console.log(currentUser)
  const [page, setPage] = useState('NotLogIn')

  useEffect(() => {
    projectAuth.onAuthStateChanged(userAuth => {
      userAuth ? setCurrentUser(userAuth) : setCurrentUser(null)
    })
  },[])

  if(!currentUser) {
    return (
      <div style={bgStyle}>
        <Navbar currentUser={currentUser} setPage={setPage} />
        <Container className='mt-3'>
          { page === 'NotLogIn' ? <NotLogIn /> : <SignIn /> }
        </Container>
        <Footer />
      </div>
    )
  }

  return (
    <div style={bgStyle}>
      <Navbar currentUser={currentUser} setPage={setPage} />
        <BrowserRouter>
          <Container className='mt-3'>
            <Switch>
              <Route path='/contacts'>
                <Contacts />
              </Route>
              <Route path='/'>
                <Profile currentUser={currentUser} />
              </Route>
            </Switch>
          </Container>
        </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
