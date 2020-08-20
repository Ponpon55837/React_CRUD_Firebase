import React from 'react'
import { navStyle, imageStyle } from '../style/style.js'
import { signInWithGoogle, signOut } from '../firebase/Config'
import { Button, Image } from 'react-bootstrap'

const Navbar = ({ setPage, currentUser }) => {

  return (
    <nav style={navStyle} className='py-3 mb-3'>
      <Button className='m-2' variant="outline-primary" onClick={() => setPage('Profile')}>Profile</Button>
      <Button className='m-2' variant="outline-primary" onClick={() => setPage('Contacts')}>Contacts</Button>
      {
        currentUser ?
        <Button className='m-2' variant="outline-primary" onClick={signOut}>
          LogOut
        </Button> :
        <Button className='m-2' variant="outline-primary" onClick={signInWithGoogle}>
          LogIn
        </Button>
      }
      {
        currentUser &&
          <Image
            className='m-2'
            style={imageStyle}
            rounded
            alt={`this photo is ${currentUser.displayName}`}
            src={currentUser.photoURL} />
      }
    </nav>
  )
}

export default Navbar
