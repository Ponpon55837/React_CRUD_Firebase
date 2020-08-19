import React, { useState, useEffect } from 'react'
import ContactsForm from './ContactsForm'
import ContactsTable from './ContactsTable'
import { projectDB } from '../firebase/Config'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const Contacts = () => {
  const [contactsObj, setContactsObj] = useState({})
  const [currentID, setCurrentId] = useState('')

  useEffect(() => {
    projectDB.child('contacts').on('value', snapshot => {
      if(snapshot.val() != null) {
        setContactsObj({
          ...snapshot.val()
        })
      }
      else {
        setContactsObj({})
      }
    })
  },[])

  const addOrEdit = (obj) => {
    if(currentID == '') {
      projectDB.child('contacts').push(
        obj,
        error => {
          if(error) {
            console.log(error)
          }
          else {
            setCurrentId('')
          }
        }
      )
    }
    else {
      projectDB.child(`contacts/${currentID}`).set(
        obj,
        error => {
          if(error) {
            console.log(error)
          }
          else {
            setCurrentId('')
          }
        }
      )
    }
  }

  const deleteId = (key) => {
    if(window.confirm('Are you sure to delete it?')){
      projectDB.child(`contacts/${key}`).remove(
        error => {
          if(error) {
            console.log(error)
          }
          else {
            setCurrentId('')
          }
        }
      )
    }
  }

  return (
    <>
      <Jumbotron style={{ marginTop: '0' }}>
        <h1>Contacts Register</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={5} lg={5} xl={5}>
            <ContactsForm {...({ addOrEdit, currentID, contactsObj })} />
          </Col>
          <Col md={7} lg={7} xl={7}>
            <ContactsTable contactsObj={contactsObj} setCurrentId={setCurrentId} deleteId={deleteId} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contacts
