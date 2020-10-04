import React, { useState, useEffect } from 'react'
import WeatherContent from './WeatherContent'
import { jumbotronStyle } from '../../style/style'
import { Jumbotron, Card } from 'react-bootstrap'

const WeatherProfile = () => {
  const initialValues = {
    observationTime: '',
    locationName: '',
    description: '',
    temperature: '',
    windSpeed: '',
    humid: ''
  }

  const [currentWeather, setCurrentWeather] = useState(initialValues)
  const weatherHandler = () => {
    return fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${process.env.REACT_APP_WEATHER_AUTH}&locationName=臺北`)
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(weatherData.records.location[0])
      const data = weatherData.records.location[0]
      const weatherElements = data.weatherElement.reduce(
        (neededElements, item) => {
          if (['WDSD', 'TEMP', 'HUMD', 'Weather'].includes(item.elementName)) {
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
      })
    })
  }

  // const weatherReportHandler = () => {
  //   return fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${process.env.REACT_APP_WEATHER_AUTH}&locationName=臺北市`)
  //   .then((res) => res.json())
  //   .then((reportData) => {
  //     // console.log(reportData.records.location[0])
  //     const data = reportData.records.location[0]
  //     const weatherReportElements = data.weatherElement.reduce(
  //       (neededElements, item) => {
  //         if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
  //           neededElements[item.elementName] = item.time[0].parameter
  //         }
  //         return neededElements;
  //       },{})
  //     setCurrentWeather({
  //       ...currentWeather,
  //       description: weatherReportElements.Wx.parameterName,
  //       // weatherCode: weatherElements.Wx.parameterValue,
  //       // rainPossibility: weatherElements.PoP.parameterName,
  //       // comfortability: weatherElements.CI.parameterName,
  //     })
  //   })
  // }

  useEffect(() => {
    const fetchData = async () => {
      const data = await weatherHandler()
    }
    fetchData()
  },[])

  return (
    <Jumbotron style={jumbotronStyle} className='my-5'>
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
