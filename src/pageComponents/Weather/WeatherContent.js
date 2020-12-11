import React, { useState, useEffect } from 'react';
import { description, temperature, airFlow, rain, styleSvg, refreshSvg, textStyle } from '../../style/weather'
import { areaArr, locationArrNorth, locationArrCenter, locationArrSouth, locationArrEast } from '../../apiComponents/weatherAPI'
import LocationArrComponents from './LocationArrComponents'
import ValueConmponents from './ValueConmponents'
import WeatherDetail from './WeatherDetail'
import { Container, Row, Col, Dropdown, DropdownButton, Button, Alert } from 'react-bootstrap'
import { ReactComponent as RefreshIcon } from './images/refresh.svg'

const WeatherContent = ({ currentWeather, setCurrentWeather, initialValues, weatherHandler }) => {

  const [btnState, setBtnState] = useState(false)
  const [areaState, setAreaState] = useState('北部')
  const [alertShow, setAlertShow] = useState(false)

  const twoFuncForAreaChange = (areaArr) => {
    setAreaState(areaArr.area)
    setCurrentWeather({...currentWeather, locationName: ''})
  }

  const twoFuncForWeather = (weatherArr) => {
    setCurrentWeather({...currentWeather, locationName: weatherArr.location})
    if(currentWeather.locationName === weatherArr.location){
      setBtnState(false)
    }
    else {
      setBtnState(true)
    }
  }

  const twoFuncForChangeBtn = () => {
    weatherHandler()
    setBtnState(false)
  }

  useEffect(() => {
    const alertShowFunc = () => {
      if(currentWeather.locationName === ''){
        setAlertShow(true)
      }
      else {
        setAlertShow(false)
      }
    }
    alertShowFunc()
  }, [currentWeather.locationName])

  return (
    <Container>
      <Row>
        <DropdownButton className='mt-2' variant='light' title={`地區：${areaState}`}>
          { areaArr.map(arr =>
            <Dropdown.Item key={arr.areaid} href="#" title={arr.area} onClick={() => twoFuncForAreaChange(arr)}>{arr.area}</Dropdown.Item>
          )}
        </DropdownButton>
        <LocationArrComponents currentWeather={currentWeather} areaState={areaState} locationArrNorth={locationArrNorth} locationArrCenter={locationArrCenter} locationArrSouth={locationArrSouth} locationArrEast={locationArrEast} twoFuncForWeather={twoFuncForWeather} twoFuncForChangeBtn={twoFuncForChangeBtn} />
        { btnState ?
          <Button className='mt-2' size='md' variant='info' title='Submit' onClick={() => twoFuncForChangeBtn()}>Submit</Button> : ''
        }
        <Col className='mt-2' xs={4} sm={2} md={1}>
          <Button variant="light" title='Refresh' hidden={btnState || alertShow} onClick={() => twoFuncForChangeBtn()}><RefreshIcon style={refreshSvg} /></Button>
        </Col>
      </Row>
      { alertShow &&
        <Alert variant='warning'>
          Please choose one city.
        </Alert>
      }
      <WeatherDetail initialValues={initialValues} currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} description={description} temperature={temperature} airFlow={airFlow} rain={rain} styleSvg={styleSvg} />
      <ValueConmponents currentWeather={currentWeather} textStyle={textStyle} />
    </Container>
  )
}

export default WeatherContent
