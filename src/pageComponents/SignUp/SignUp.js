import React, { useState } from 'react'
import { signUpWithEmail } from '../../firebase/Config'
import { Form, Button, Alert } from 'react-bootstrap'

const SignUp = () => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    address: '',
    error: ''
  }

  const [user, setUser] = useState(initialFieldValues)

  const handlerInputChange = (e) => {
    const { name, value } = e.target
    setUser({
      // 這邊先串接useState中的valuses，然後使用陣列去寫入每個input裡面的name的值
      ...user,
      [name]: value,
      error: '',
    })
  }

  const handlerFormSubmit = async (e) => {
    e.preventDefault()
    await signUpWithEmail(user.email, user.password).then(result => {
      // Update the nickname
      result.user.updateProfile({
        displayName: user.fullName,
      })
    }).catch(error => {
      // Update the error
      console.log(error);
      setUser({
        ...user,
        error: error.message,
      })
    })
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

      <Form.Group controlId='formMobile'>
        <Form.Label>Mobile</Form.Label>
        <input
          className='form-control'
          placeholder='Input Mobile'
          name='mobile'
          value={user.mobile}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formEmail'>
        <Form.Label>Email</Form.Label>
        <input
          className='form-control'
          placeholder='Input E-mail'
          name='email'
          value={user.email}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formPasswordOne'>
        <Form.Label>Password</Form.Label>
        <input
          type='password'
          className='form-control'
          placeholder='Input password'
          name='password'
          value={user.password}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formAddress'>
        <Form.Label>Address</Form.Label>
        <textarea
          className='form-control'
          placeholder='Input Address'
          name='address'
          value={user.address}
          onChange={handlerInputChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {
        user.error !== '' &&
        <Alert className='my-2' variant='danger'>
          {user.error}
        </Alert>
      }
    </Form>
  )
}

export default SignUp
