import React, { useState, useEffect } from 'react';
import WeatherContent from './WeatherContent'
import CountryWeatherContent from './CountryWeatherContent'
import { jumbotronStyle } from '../../style/style'
import { Jumbotron, Card, Button } from 'react-bootstrap'

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
  const [weatherPage, setWeatherPage] = useState('preWeather')
  const [countryWeatherValue, setCountryWeatherValue] = useState([])

  const pageSwitch = () => {
    switch(weatherPage) {
      case 'preWeather':
      return (
        <WeatherContent currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} weatherHandler={weatherHandler} />
      )
      case 'countryWeather':
      return (
        <CountryWeatherContent countryWeatherValue={countryWeatherValue} />
      )
      default:
      return (
        <WeatherContent currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} weatherHandler={weatherHandler} />
      )
    }
  }

  const weatherHandler = async () => {
    await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${process.env.REACT_APP_WEATHER_AUTH}&locationName=${currentWeather.locationName}`)
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

  const countryWeaherHandelr = async () => {
    await fetch(`https://opendata.cwb.gov.tw/api//v1/rest/datastore/F-D0047-089?Authorization=${process.env.REACT_APP_WEATHER_AUTH}`)
    .then((res) => res.json())
    .then((countryData) => {
      const countryLocat = countryData.records.locations[0].location
      setCountryWeatherValue(countryLocat)
    })
  }

  useEffect(() => {
    weatherHandler()
    countryWeaherHandelr()
  },[])

  return (
    <Jumbotron style={jumbotronStyle} className='m-4'>
      <h1 className='mb-5'>This is Weather Part</h1>
      <Button className='m-2' variant="outline-primary"
        style={{border: 'none'}}
        disabled={weatherPage === 'preWeather'}
        onClick={() => setWeatherPage('preWeather')}>
          PreWeather
      </Button>
      <Button className='m-2' variant="outline-primary"
        style={{border: 'none'}}
        disabled={weatherPage === 'countryWeather'}
        onClick={() => setWeatherPage('countryWeather')}>
          CountryWeather
      </Button>
      <Card>
        <Card.Body>
          { pageSwitch() }
        </Card.Body>
      </Card>
    </Jumbotron>
  )
}

export default WeatherProfile
