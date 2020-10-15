import React, { useState, useEffect } from 'react'
import WeatherContent from './WeatherContent'
import { jumbotronStyle } from '../../style/style'
import { Jumbotron, Card } from 'react-bootstrap'

const WeatherProfile = () => {
  const initialValues = {
    observationTime: '',
    locationName: '臺北',
    description: '',
    temperature: '',
    windSpeed: '',
    humid: '',
    pers: '',
    hfx: '',
    huiv: ''
  }

  const [currentWeather, setCurrentWeather] = useState(initialValues)

  const countryWeaherHandelr = async () => {
    return await fetch(`https://opendata.cwb.gov.tw/api//v1/rest/datastore/F-D0047-089?Authorization=${process.env.REACT_APP_WEATHER_AUTH}`)
    .then((res) => res.json())
    .then((countryData) => {
      const countryLocat = countryData.records.locations[0].location
      console.log(countryLocat)
      countryLocat.map(da => {
        console.log(<p>{da}</p>)
      })
    })
  }

  const weatherHandler = async () => {
    return await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${process.env.REACT_APP_WEATHER_AUTH}&locationName=${currentWeather.locationName}`)
    .then((response) => response.json())
    .then((weatherData) => {
      console.log('records', weatherData.records.location[0])
      const data = weatherData.records.location[0]
      const weatherElements = data.weatherElement.reduce(
        (neededElements, item) => {
          if (['WDSD', 'TEMP', 'HUMD', 'Weather', 'PRES', 'H_FX', 'H_UVI' ].includes(item.elementName)) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },{})
      setCurrentWeather({
        ...currentWeather,
        locationName: data.locationName,
        observationTime: data.time.obsTime,
        description: '天氣：' + weatherElements.Weather,
        temperature: weatherElements.TEMP,
        windSpeed: weatherElements.WDSD,
        humid: weatherElements.HUMD,
        pers: weatherElements.PRES,
        hfx: weatherElements.H_FX,
        huiv: weatherElements.H_UVI
      }, console.log('weatherHandler',currentWeather))
    })
  }

  useEffect(() => {
    // weatherReportHandler()
    weatherHandler()
    countryWeaherHandelr()
  },[])

  return (
    <Jumbotron style={jumbotronStyle} className='my-5'>
      <h1 className='mb-5'>This is Weather Part</h1>
        <Card>
          <Card.Body>
            <WeatherContent currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} weatherHandler={weatherHandler} />
          </Card.Body>
        </Card>
    </Jumbotron>
  )
}

export default WeatherProfile
