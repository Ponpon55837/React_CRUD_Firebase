import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const NotLogIn = () => {

  return (
    <Jumbotron>
      <h1>Please Log In</h1>
      <p>
        You have to log in to unlock more information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default NotLogIn
