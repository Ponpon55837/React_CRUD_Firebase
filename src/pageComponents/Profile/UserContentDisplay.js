import React from 'react'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'


const UserContentDisplay = ({ currentUser }) => {

  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
      <Image className='my-2' src={currentUser.photoURL} rounded />
      </Col>
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
      <ListGroup className='my-2'>
        <ListGroup.Item>Email： {currentUser.email}</ListGroup.Item>
        <ListGroup.Item>Email驗證： {currentUser.emailVerified ? <>是</> : <>否，請驗證您的mail</>}</ListGroup.Item>
        <ListGroup.Item>建立時間： {currentUser.metadata.creationTime}</ListGroup.Item>
        <ListGroup.Item>最後登入時間： {currentUser.metadata.lastSignInTime}</ListGroup.Item>
      </ListGroup>
      </Col>
    </Row>
  )
}

export default UserContentDisplay