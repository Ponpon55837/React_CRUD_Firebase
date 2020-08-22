import React from 'react'
import SignUp from './SignUp/SignUp'
import { Jumbotron } from 'react-bootstrap'

const NotLogIn = () => {

  return (
    <Jumbotron>
      <h1>Please Log In To Continue</h1>
      <p>
        If you  don't have an account,please sign up at this form.
      </p>
      <SignUp />
    </Jumbotron>
  )
}

export default NotLogIn
