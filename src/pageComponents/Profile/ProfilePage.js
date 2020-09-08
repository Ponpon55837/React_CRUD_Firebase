import React, { useState } from 'react'
import { jumbotronStyle } from '../../style/style'
import UserContentDisplay from './UserContentDisplay'
import UserContentModify from './UserContentModify'
import { Jumbotron, Container, Button } from 'react-bootstrap'

const Profile = ({ currentUser }) => {
  const [page, setPage] = useState('display')

  return (
    <Jumbotron style={jumbotronStyle}>
      <h1>Welcome Back {currentUser.displayName}</h1>
      <Button className='m-2' variant="outline-primary" onClick={() =>    setPage('display')}>Display</Button>
      <Button className='m-2' variant="outline-primary" onClick={() => setPage('modify')}>Modify</Button>
      <Container className='my-4'>
        {
          page === 'display'
          ? <UserContentDisplay currentUser={currentUser} />
          : <UserContentModify currentUser={currentUser} />
        }
      </Container>
    </Jumbotron>
  )
}

export default Profile
