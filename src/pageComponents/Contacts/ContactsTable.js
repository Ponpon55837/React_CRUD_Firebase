import React from 'react'
import { Table, Button } from 'react-bootstrap'
import IosHammerOutline from 'react-ionicons/lib/IosHammerOutline'
import IosTrashOutline from 'react-ionicons/lib/IosTrashOutline'

const ContactsTable = ({ contactsObj, setCurrentId, deleteId, setPage }) => {

  // use two function to make in one onClick
  const callBackTwoFunct = (id) => {
    setCurrentId(id)
    setPage('Add')
  }

  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Mobile</th>
          <th>EMail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(contactsObj).map(id => (
            <tr key={id}>
              <td>{contactsObj[id].fullName}</td>
              <td>{contactsObj[id].mobile}</td>
              <td>{contactsObj[id].email}</td>
              <td>
                <Button className='btn m-1' variant="outline-primary" onClick={() => callBackTwoFunct(id)}><IosHammerOutline fontSize='20px' /></Button>
                <Button className='btn m-1' variant="outline-danger" onClick={() => deleteId(id)}><IosTrashOutline fontSize='20px' /></Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default ContactsTable
