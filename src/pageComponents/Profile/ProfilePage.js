import React, { useState, useEffect } from 'react';
import { jumbotronStyle } from '../../style/style'
// import useFireStore from '../../hooks/useFireStore'
import { projectFirestore } from '../../firebase/Config'
import UserContentDisplay from './UserContentDisplay'
import UserContentModify from './UserContentModify'
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline'
import IosArrowDropleft from 'react-ionicons/lib/IosArrowDropleft'
import { Jumbotron, Container, Row, Col, Button, Image } from 'react-bootstrap'

const colStyle= { borderRadius: '30px'}

const Profile = ({ currentUser }) => {
  const [page, setPage] = useState('display')
  const [snapData, setSnapData] = useState([])
  // console.log(snapData)

  useEffect(() => {
    const docRef = projectFirestore.collection('users').doc(`${currentUser.uid}`)
    docRef.get().then(snap => {
    if (snap.exists) {
        setSnapData(snap.data())
      } else {
        console.log("No such document!")
        setSnapData(currentUser)
      }
    }).catch(error => {
      console.log("Error getting document:", error)
    })
  },[currentUser])

  return (
    <Jumbotron style={jumbotronStyle} md={12} lg={12} xl={12} className='m-4'>
      <h1 className='mb-5'>Welcome Back {currentUser.displayName}</h1>
      <Button className='m-2' variant="outline-info"
        style={{border: 'none'}}
        disabled={page === 'display'}
        onClick={() => setPage('display')}
        title='Back to Profile'>
        <IosArrowDropleft fontSize="30px" />
      </Button>
      <Button className='m-2' variant="outline-info"
        style={{border: 'none'}}
        disabled={page === 'modify'}
        onClick={() => setPage('modify')}
        title='Edit Profile'>
        <IosAddCircleOutline fontSize="30px" />
      </Button>
      <Container className='my-4'>
        <Row>
          <Col className='d-none d-sm-none d-md-block' md={12} lg={6} xl={6}>
            <Image className='my-2' src={snapData.photoURL} style={colStyle}/>
          </Col>
        {
          page === 'display'
          ? <UserContentDisplay currentUser={currentUser} snapData={snapData} />
          : <UserContentModify currentUser={currentUser} snapData={snapData} setPage={setPage} />
        }
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Profile
