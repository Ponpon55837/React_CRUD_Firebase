import React from 'react'
import { location, description, temperature, airFlow, rain, styleSvg, refreshSvg } from '../../style/weather'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg'
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg'
import { ReactComponent as RainIcon } from './images/rain.svg'
import { ReactComponent as RefreshIcon } from './images/refresh.svg'

const WeatherContent = ({ currentWeather }) => {

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} style={location}>{currentWeather.locationName}</Col>
        <Col xs={5} sm={5} md={5}>{currentWeather.observationTime}</Col>
        <Col xs={4} sm={4} md={4} style={description}>
          {currentWeather.description}
        </Col>
        <Col xs={1} sm={1} md={1}>
          <RefreshIcon style={refreshSvg} />
        </Col>
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
