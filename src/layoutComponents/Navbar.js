import React from 'react'
import { imageStyle } from '../style/style.js'
import { signInWithGoogle, signOut } from '../firebase/Config'
import { Navbar, Nav, Button, Image } from 'react-bootstrap'

const NavbarConent = ({ currentUser }) => {

  return (
    <Navbar className='position-sticky' bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Profile</Nav.Link>
      <Nav.Link href="/contacts">Contacts</Nav.Link>
      <Nav.Link href="#">Pricing</Nav.Link>
    </Nav>
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
    </Navbar>
  )
}

export default NavbarConent


// <nav style={navStyle} className='py-3 mb-3'>
//   <Button className='m-2' variant="outline-primary" onClick={() => setPage('Profile')}>Profile</Button>
//   <Button className='m-2' variant="outline-primary" onClick={() => setPage('Contacts')}>Contacts</Button>
// </nav>
