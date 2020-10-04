import React from 'react'
import { location, description, temperature, airFlow, rain, styleSvg, refreshSvg } from '../../style/weather'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg'
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg'
import { ReactComponent as RainIcon } from './images/rain.svg'
import { ReactComponent as RefreshIcon } from './images/refresh.svg'

const WeatherContent = ({ currentWeather, weatherHandler, weatherReportHandler }) => {

  const twoFuncHandler = () => {
    weatherHandler()
    weatherReportHandler()
  }

  return (
    <Container>
      <Row>
        <Col className='mb-1' xs={9} sm={10} md={11} style={location}>{currentWeather.locationName}{currentWeather.valueTowns}</Col>
        <Col xs={3} sm={2} md={1}>
          <Button variant="light" onClick={() => twoFuncHandler()}><RefreshIcon style={refreshSvg} /></Button>
        </Col>
        <Col sm={12} md={12} style={description}>
          {currentWeather.description}
        </Col>
        <Col className='mb-2' sm={12} md={12}>{currentWeather.observationTime}</Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} xl={4} style={temperature}>
          <div className='mr-2'>{Math.round(currentWeather.temperature)}°C</div>
          <CloudyIcon style={styleSvg} />
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} style={airFlow}>
          <div className='mr-2'>{currentWeather.windSpeed} m/h</div>
          <AirFlowIcon style={styleSvg} />
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} style={rain}>
          <div className='mr-2'>{currentWeather.humid * 100}%</div>
          <RainIcon style={styleSvg} />
        </Col>
      </Row>
    </Container>
  )
}

export default WeatherContent
