import React from 'react'
import { Table, Button } from 'react-bootstrap'

const ContactsTable = ({ contactsObj, setCurrentId, deleteId, setPage }) => {

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
                <Button className='btn-primary m-1' onClick={() => (setCurrentId(id), setPage('Add'))}>Edit</Button>
                <Button className='btn-danger m-1' onClick={() => deleteId(id)}>Delete</Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default ContactsTable
