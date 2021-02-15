import React, { useState, useEffect } from 'react';
import { jumbotronStyle } from '../../style/style'
// import useFireStore from '../../hooks/useFireStore'
import { projectFirestore } from '../../firebase/Config'
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
      <h1 className='mb-5'>To Add/view or Update/delete notes click on notes from navigation bar</h1>
     
    </Jumbotron>
  )
}

export default Profile
