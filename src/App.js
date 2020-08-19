import React, { useState } from 'react'
import Navbar from './layoutComponents/Navbar'
import Footer from './layoutComponents/Footer'
import Contacts from './pageComponents/Contacts'
import Profile from './pageComponents/ProfilePage'
import { Container } from 'react-bootstrap'

const App = () => {
  const [page, setPage] = useState('Profile')

  return (
    <>
      <Navbar setPage={setPage} />
      <Container>
        { page === 'Profile' ? <Profile /> : <Contacts /> }
      </Container>
      <Footer />
    </>
  )
}

export default App
