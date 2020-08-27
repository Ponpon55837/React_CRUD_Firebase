import React, { useState } from 'react'
import { porjectAuth, signUpWithEmail } from '../../firebase/Config'
import { Form, Button } from 'react-bootstrap'

const SignUp = () => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    address: '',
    error: null
  }

  const [values, setValues] = useState(initialFieldValues)

  const handlerInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      // 這邊先串接useState中的valuses，然後使用陣列去寫入每個input裡面的name的值
      ...values,
      [name]: value
    })
  }

  const handlerFormSubmit = (e) => {
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
          value={values.fullName}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formMobile'>
        <Form.Label>Mobile</Form.Label>
        <input
          className='form-control'
          placeholder='Input Mobile'
          name='mobile'
          value={values.mobile}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formEmail'>
        <Form.Label>Email</Form.Label>
        <input
          className='form-control'
          placeholder='Input E-mail'
          name='email'
          value={values.email}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formPasswordOne'>
        <Form.Label>Password</Form.Label>
        <input
          type='password'
          className='form-control'
          placeholder='Input password'
          name='password'
          value={values.passwordOne}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formPasswordTwo'>
        <Form.Label>Password</Form.Label>
        <input
          type='password'
          className='form-control'
          placeholder='Input password again'
          name='password'
          value={values.passwordTwo}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formAddress'>
        <Form.Label>Address</Form.Label>
        <textarea
          className='form-control'
          placeholder='Input Address'
          name='address'
          value={values.address}
          onChange={handlerInputChange} />
      </Form.Group>
      <Button disabled={!values} variant="primary" type="submit">
        Submit
      </Button>
      {values.error && <p>{values.error.message}</p>}
    </Form>
  )
}

export default SignUp
