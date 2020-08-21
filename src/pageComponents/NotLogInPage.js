import React from 'react'
import SignUp from './SignUp/SignUp'
import { Jumbotron, Button } from 'react-bootstrap'

const NotLogIn = () => {

  return (
    <Jumbotron>
      <h1>Please Log In To Continue</h1>
      <p>
        You have to log in to unlock more information.
      </p>
      <SignUp />
    </Jumbotron>
  )
}

export default NotLogIn
