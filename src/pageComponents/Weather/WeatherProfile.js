import React, { useState } from 'react'
import WeatherContent from './WeatherContent'
import { jumbotronStyle } from '../../style/style'
import { Jumbotron, Card } from 'react-bootstrap'

const WeatherProfile = () => {
  const initialValues = {
    observationTime: '2019-10-02 22:10:00',
    locationName: '臺北市',
    description: '多雲時晴',
    temperature: 27.5,
    windSpeed: 0.3,
    humid: 0.88
  }

  const [currentWeather, setCurrentWeather] = useState(initialValues)

  return (
    <Jumbotron style={jumbotronStyle} className='m-5'>
      <h1 className='mb-5'>This is Weather Part</h1>
        <Card>
          <Card.Body>
            <WeatherContent currentWeather={currentWeather} />
          </Card.Body>
        </Card>
    </Jumbotron>
  )
}

export default WeatherProfile
