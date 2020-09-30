import React from 'react'
import WeatherContent from './WeatherContent'
import { jumbotronStyle } from '../../style/style'
import { Jumbotron, Card } from 'react-bootstrap'

const WeatherProfile = () => {

  return (
    <Jumbotron style={jumbotronStyle} className='m-5'>
      <h1 className='mb-5'>This is Weather Part</h1>
        <Card>
          <Card.Body>
            <WeatherContent />
          </Card.Body>
        </Card>
    </Jumbotron>
  )
}

export default WeatherProfile
