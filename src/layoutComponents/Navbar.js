import React from 'react'
import { navStyle } from '../style/style.js'
import { Button } from 'react-bootstrap'

const Navbar = ({ setPage }) => {

  return (
    <nav style={navStyle} className='py-3 mb-3'>
      <Button className='mx-2' variant="outline-primary" onClick={() => setPage('Profile')}>Profile</Button>
      <Button className='mx-2' variant="outline-primary" onClick={() => setPage('Contacts')}>Contacts</Button>
    </nav>
  )
}

export default Navbar
