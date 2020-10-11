import React, { useState } from 'react'
import { description, temperature, airFlow, rain, styleSvg, refreshSvg, textStyle } from '../../style/weather'
import { areaArr, locationArrNorth, locationArrCenter, locationArrSouth, locationArrEast } from '../../apiComponents/weatherAPI'
import LocationArrComponents from './LocationArrComponents'
import HuivConmponents from './HuivConmponents'
import { Container, Row, Col,Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { ReactComponent as CloudyIcon } from './images/day-clear.svg'
import { ReactComponent as CloudyFOGIcon } from './images/day-cloudy-fog.svg'
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg'
import { ReactComponent as RainIcon } from './images/rain.svg'
import { ReactComponent as RefreshIcon } from './images/refresh.svg'

const WeatherContent = ({ currentWeather, setCurrentWeather, weatherHandler }) => {

  const [btnState, setBtnState] = useState(false)
  const [areaState, setAreaState] = useState('北部')

  const twoFuncForAreaChange = (areaArr) => {
    setAreaState(areaArr.area)
    setCurrentWeather({...currentWeather, locationName: ''})
  }

  const twoFuncForWeather = (weatherArr) => {
    setCurrentWeather({...currentWeather, locationName: weatherArr.location})
    setBtnState(true)
  }

  const twoFuncForChangeBtn = () => {
    weatherHandler()
    setBtnState(false)
  }

  return (
    <Container>
      <Row>
          <DropdownButton className='m-2' variant='light' title={`地區：${areaState}`}>
            { areaArr.map(arr =>
              <Dropdown.Item key={arr.areaid} href="#" onClick={() => twoFuncForAreaChange(arr)}>{arr.area}</Dropdown.Item>
            )}
          </DropdownButton>
          <LocationArrComponents currentWeather={currentWeather} areaState={areaState} locationArrNorth={locationArrNorth} locationArrCenter={locationArrCenter} locationArrSouth={locationArrSouth} locationArrEast={locationArrEast} twoFuncForWeather={twoFuncForWeather} />
        { btnState ?
          <Button className='m-2' variant='info' onClick={() => twoFuncForChangeBtn()}>Submit</Button> : ''
        }
        <Col className='m-2' xs={4} sm={2} md={1}>
          <Button variant="light" onClick={() => twoFuncForChangeBtn()}><RefreshIcon style={refreshSvg} /></Button>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} style={description}>
          {currentWeather.description}
        </Col>
        <Col className='mb-2' sm={12} md={12}>{currentWeather.observationTime}</Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} xl={4} style={temperature}>
          <div className='mr-2'>{Math.round(currentWeather.temperature)}°C</div>
          {
            currentWeather.description === '晴' ?
            <CloudyIcon style={styleSvg} /> :
            <CloudyFOGIcon style={styleSvg} />
          }
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} style={airFlow}>
          <div className='mr-2'>{currentWeather.windSpeed} m/h</div>
          <AirFlowIcon style={styleSvg} />
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} style={rain}>
          <div className='mr-2'>{(currentWeather.humid * 100).toFixed(2)}%</div>
          <RainIcon style={styleSvg} />
        </Col>
      </Row>
      <Row style={textStyle}>
        <Col xs={12} md={6} lg={4} xl={4} >
          <div className='mr-2 mt-4'>{currentWeather.pers} hpa</div>
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} >
          <div className='mr-2 mt-4'>{currentWeather.hfx} 公尺/秒</div>
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} >
          <HuivConmponents currentWeather={currentWeather} />
        </Col>
      </Row>
    </Container>
  )
}

export default WeatherContent
