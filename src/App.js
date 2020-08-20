import React, { useState, useEffect } from 'react'
import Navbar from './layoutComponents/Navbar'
import Footer from './layoutComponents/Footer'
import Contacts from './pageComponents/Contacts/Contacts'
import Profile from './pageComponents/ProfilePage'
import NotLogIn from './pageComponents/NotLogInPage'
import { porjectAuth } from "./firebase/Config"
import { Container } from 'react-bootstrap'

const App = () => {
  const [currentUser, setCurrentUser] = useState()
  const [page, setPage] = useState('Profile')

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
      <Navbar setPage={setPage} currentUser={currentUser} />
      <Container>
        {
          currentUser ?
          <>
            { page === 'Profile' ? <Profile /> : <Contacts /> }
          </> :
          <NotLogIn />
        }
      </Container>
      <Footer />
    </>
  )
}

export default App
