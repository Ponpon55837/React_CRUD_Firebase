import React, { useState, useEffect } from 'react'
import ContactsForm from './ContactsForm'
import ContactsTable from './ContactsTable'
import { projectDB } from '../../firebase/Config'
import { jumbotronStyle } from '../../style/style.js'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const Contacts = () => {
  const [contactsObj, setContactsObj] = useState({})
  const [currentID, setCurrentId] = useState('')

  useEffect(() => {
    // 串接已經有的內容，如果在contacts這個表頭底下有值，串接已有的內容，沒有的話就做一個空的物件
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

  // 新增資料或是編輯，新增使用push，編輯則用set
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

  // 刪除資料，使用remove
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
      <Jumbotron style={jumbotronStyle} md={12} lg={12} xl={12}>
        <h1>Contacts Register</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={5} xl={5}>
            <ContactsForm {...({ addOrEdit, currentID, contactsObj })} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={7} xl={7}>
            <ContactsTable contactsObj={contactsObj} setCurrentId={setCurrentId} deleteId={deleteId} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contacts
