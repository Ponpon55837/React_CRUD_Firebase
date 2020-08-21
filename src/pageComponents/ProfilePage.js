import React from 'react'
import { Jumbotron, Image, ListGroup } from 'react-bootstrap'

const Profile = ({ currentUser }) => {

  return (
    <Jumbotron>
      <h1>Welcome Back {currentUser.displayName}</h1>
      <Image className='my-2' src={currentUser.photoURL} rounded />
      <ListGroup className='my-2'>
        <ListGroup.Item>Email： {currentUser.email}</ListGroup.Item>
        <ListGroup.Item>Email驗證： {currentUser.emailVerified ? <>是</> : <>否</>}</ListGroup.Item>
        <ListGroup.Item>建立時間： {currentUser.metadata.creationTime}</ListGroup.Item>
        <ListGroup.Item>最後登入時間： {currentUser.metadata.lastSignInTime}</ListGroup.Item>
      </ListGroup>
    </Jumbotron>
  )
}

export default Profile
