import React from 'react'
import { imageStyle, mainStyle } from '../style/style.js'
import { signInWithGoogle, signInWithEmail, signOut } from '../firebase/Config'
import { Link } from "react-router-dom"
import { Navbar, Nav, Button, Image, Dropdown, DropdownButton } from 'react-bootstrap'

const NavbarConent = ({ currentUser, setPage }) => {

  return (
    <Navbar style={mainStyle} collapseOnSelect expand="lg">
      <Navbar.Brand className='navColor' href="/">Navbar</Navbar.Brand>
      {
        currentUser &&
          <Image
            className='m-2'
            style={imageStyle}
            rounded
            alt={`this photo is ${currentUser.displayName}`}
            src={currentUser.photoURL} />
      }
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navColor">
          <Nav.Link href="/">Profile</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
          {
            currentUser ?
            <Button size='sm' className='mt-1' variant="outline-primary" onClick={signOut}>
              LogOut
            </Button> :
            <DropdownButton size='sm' className='mt-1' variant="outline-primary" title="LogIn">
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
        </Nav>
      </Navbar.Collapse>
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
