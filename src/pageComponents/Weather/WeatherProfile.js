import React, { useState, useEffect } from 'react'
import WeatherContent from './WeatherContent'
import { jumbotronStyle } from '../../style/style'
import { Jumbotron, Card } from 'react-bootstrap'

const WeatherProfile = () => {
  const initialValues = {
    observationTime: '',
    locationName: '',
    description: '',
    temperature: 27.5,
    windSpeed: '0.3',
    humid: ''
  }

  const [currentWeather, setCurrentWeather] = useState(initialValues)
  const weatherHandler = () => {
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-59284856-0F85-4E19-A05B-42EDCCC4B575&locationName=臺北')
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(weatherData.records.location[0])
      const data = weatherData.records.location[0]
      const weatherElements = data.weatherElement.reduce(
        (neededElements, item) => {
          if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },{}
      )
      setCurrentWeather({
        locationName: data.locationName,
        observationTime:data.time.obsTime,
        description: '多雲時晴',
        temperature: weatherElements.TEMP,
        windSpeed: weatherElements.WDSD,
        humid: weatherElements.HUMD,
      })
    })
  }

  useEffect(() => {
    weatherHandler()
  },[])

  return (
    <Jumbotron style={jumbotronStyle} className='m-5'>
      <h1 className='mb-5'>This is Weather Part</h1>
        <Card>
          <Card.Body>
            <WeatherContent currentWeather={currentWeather} weatherHandler={weatherHandler} />
          </Card.Body>
        </Card>
    </Jumbotron>
  )
}

export default WeatherProfile
