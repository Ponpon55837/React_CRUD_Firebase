import React, { useRef } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const SignUp2 = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          <Form>
            <Form.Group id='email'>
              <Form.Label>Eamil</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='email' ref={passwordRef} required />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='email' ref={passwordConfirmRef} required />
            </Form.Group>
          </Form>
          <Button className='w-100' type='submit'>Sign Up</Button>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Log In
      </div>
    </>
  )
}

export default SignUp2
