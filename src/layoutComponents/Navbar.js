import React from 'react'
import { imageStyle } from '../style/style.js'
import { signInWithGoogle, signInWithEmail, signOut } from '../firebase/Config'
import { Link } from "react-router-dom"
import { Navbar, Nav, Button, Image, Dropdown, DropdownButton } from 'react-bootstrap'

const NavbarConent = ({ currentUser, setPage }) => {

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
        <DropdownButton id="dropdown-item-button" title="LogIn">
          <Dropdown.Item
            as="button"
            variant="outline-primary"
            onClick={signInWithGoogle}>
              Google Login
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            variant="outline-primary"
            onClick={() => setPage('SignIn')}>
              SignIn
          </Dropdown.Item>
        </DropdownButton>
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

// <Button className='m-2' variant="outline-primary" onClick={signInWithGoogle}>
//   LogIn
// </Button>
