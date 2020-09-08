import React, { useState } from 'react'
import { resetEmail, signOut } from '../../firebase/Config'
import { Form, Button } from 'react-bootstrap'

const UserContetModify = ({ currentUser }) => {
  const initialFieldValues = {
    fullName: ''
  }

  const [user, setUser] = useState(initialFieldValues)

  const handlerInputChange = (e) => {
    const { name, value } = e.target
    setUser({
      // 這邊先串接useState中的valuses，然後使用陣列去寫入每個input裡面的name的值
      ...user,
      [name]: value
    })
  }

  const handlerFormSubmit = async (e) => {
    if (currentUser.email != null) {
        currentUser.updateProfile({
          displayName: user.fullName
        }).then(() => {
          console.log("displayName change")
        }).catch((error) => {
          console.log(error);
        })
    } else {
      console.log(user)
    }
    e.preventDefault()
  }

  return (
    <Form className='my-2' onSubmit={handlerFormSubmit}>
      <Form.Group controlId='formFullName'>
        <Form.Label>Display Name</Form.Label>
        <input
          className='form-control'
          placeholder='Input Full Name'
          name='fullName'
          value={user.fullName}
          onChange={handlerInputChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  )
}

export default UserContetModify


//
// <Form.Group controlId='formEmail'>
//   <Form.Label>Email</Form.Label>
//   <input
//     className='form-control'
//     placeholder='Input E-mail'
//     name='email'
//     value={user.email}
//     onChange={handlerInputChange} />
// </Form.Group>
