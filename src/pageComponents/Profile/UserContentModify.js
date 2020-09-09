import React, { useState, useEffect } from 'react'
// import { resetEmail, signOut } from '../../firebase/Config'
import { Form, Button, Alert } from 'react-bootstrap'

const UserContetModify = ({ currentUser }) => {
  const initialFieldValues = {
    fullName: ''
  }

  const [user, setUser] = useState(initialFieldValues)
  const [subSuccess, setSubSuccess] = useState(false)
  const [errorShow, setErrorShow] = useState(true)

  useEffect(() => {
    if(currentUser === '') {
      setUser({
        ...initialFieldValues
      })
    }
    else {
      console.log(currentUser.displayName)
    }
  },[])

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
          setUser(initialFieldValues)
          setSubSuccess(true)
        }).catch((error) => {
          setUser({
            ...user,
            error: error.message
          })
        })
    } else {
      console.log(user)
    }
    e.preventDefault()
  }

  return (
    <Form className='my-2' onSubmit={handlerFormSubmit}>
      <Form.Group controlId='formFullName'>
        <Form.Label>Full Name</Form.Label>
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
      {
        subSuccess &&
        <Alert
          className='my-2'
          variant='success'
          onClose={() => setSubSuccess(false)}
          dismissible>
          Update Success
        </Alert>
      }
      {
        user.error && errorShow &&
        <Alert
          className='my-2'
          variant='danger'
          onClose={() => setErrorShow(false)}
          dismissible>
          {user.error}
        </Alert>
      }
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
