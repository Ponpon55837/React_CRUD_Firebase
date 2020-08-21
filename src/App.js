import React, { useState, useEffect } from 'react'
import Navbar from './layoutComponents/Navbar'
import Footer from './layoutComponents/Footer'
import Contacts from './pageComponents/Contacts/Contacts'
import Profile from './pageComponents/ProfilePage'
import NotLogIn from './pageComponents/NotLogInPage'
import { porjectAuth } from "./firebase/Config"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from 'react-bootstrap'

const App = () => {
  const [currentUser, setCurrentUser] = useState()

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
    <>
      <Navbar currentUser={currentUser} />
      {
        !currentUser ?
        <Container className='mt-3'>
          <NotLogIn />
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
    </>
  )
}

export default App
