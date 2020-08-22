import React, { useState, useEffect } from 'react'
import Navbar from './layoutComponents/Navbar'
import Footer from './layoutComponents/Footer'
import Contacts from './pageComponents/Contacts/Contacts'
import Profile from './pageComponents/ProfilePage'
import SignIn from './pageComponents/SignIn/SignIn'
import NotLogIn from './pageComponents/NotLogInPage'
import { porjectAuth } from "./firebase/Config"
import { bgStyle } from './style/style'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from 'react-bootstrap'

const App = () => {
  const [currentUser, setCurrentUser] = useState()
  const [page, setPage] = useState('NotLogIn')
  console.log(page)

  useEffect(() => {
    porjectAuth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        setCurrentUser(userAuth)
        console.log(userAuth)
      }
      else {
        setCurrentUser('')
      }
    })
  },[])

  return (
    <div style={bgStyle}>
      <Navbar currentUser={currentUser} setPage={setPage} />
      {
        !currentUser ?
        <Container className='mt-3'>
          { page === 'NotLogIn' ? <NotLogIn /> : <SignIn /> }
        </Container> :
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
      }
      <Footer />
    </div>
  )
}

export default App
