import React, { useState } from 'react'
import { jumbotronStyle } from '../../style/style'
import { Container, Row, Col, Jumbotron, Form, Button } from 'react-bootstrap'

const SignIn = ({ addOrEdit }) => {

  const initialFieldValues = {
    email: '',
    password: '',
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
    addOrEdit(values)
  }

  return (
    <Container className='my-5 py-5'>
      <Row className='my-1'>
        <Col xs={12} sm={12} md={10} lg={8} xl={6}>
          <Jumbotron style={jumbotronStyle}>
            <h1>Sign in with your email</h1>
            <Form.Group controlId='formEmail'>
              <Form.Label>Email</Form.Label>
              <input
                className='form-control'
                placeholder='Input E-mail'
                name='email'
                value={values.email}
                onChange={handlerInputChange} />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <input
                type='password'
                className='form-control'
                placeholder='Input password'
                name='password'
                value={values.password}
                onChange={handlerInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn
