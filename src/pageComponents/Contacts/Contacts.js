import React, { useState, useEffect } from 'react'
import ContactsForm from './ContactsForm'
import ContactsTable from './ContactsTable'
import { projectDB } from '../../firebase/Config'
import { jumbotronStyle } from '../../style/style.js'
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap'

const Contacts = () => {
  const [contactsObj, setContactsObj] = useState({})
  const [currentID, setCurrentId] = useState('')
  const [page, setPage] = useState('Table')

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
        <Button className='m-2' variant="outline-primary" onClick={() => setPage('Table')}>Table</Button>
        <Button className='m-2' variant="outline-primary" onClick={() => setPage('Form')}>Form</Button>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            { page === 'Table' ?
              <ContactsTable contactsObj={contactsObj} setCurrentId={setCurrentId} deleteId={deleteId} /> :
              <ContactsForm {...({ addOrEdit, currentID, contactsObj })} />               
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contacts
