import React, { useState, useEffect } from 'react'
import { jumbotronStyle } from '../../style/style'
import UserContentDisplay from './UserContentDisplay'
import UserContentModify from './UserContentModify'
import { Jumbotron, Container, Row, Col, Button, Image } from 'react-bootstrap'

const Profile = ({ currentUser }) => {
  const [page, setPage] = useState('display')

  return (
    <Jumbotron style={jumbotronStyle}>
      <h1>Welcome Back {currentUser.displayName}</h1>
      <Button className='m-2' variant="outline-primary" onClick={() =>    setPage('display')}>Display</Button>
      <Button className='m-2' variant="outline-primary" onClick={() => setPage('modify')}>Modify</Button>
      <Container className='my-4'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Image className='my-2' src={currentUser.photoURL} rounded />
          </Col>
        {
          page === 'display'
          ? <UserContentDisplay currentUser={currentUser} />
          : <UserContentModify currentUser={currentUser} setPage={setPage} />
        }
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Profile
