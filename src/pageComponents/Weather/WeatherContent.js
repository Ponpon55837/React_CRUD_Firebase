import React from 'react'
import { location, description, temperature, airFlow, rain, styleSvg, refreshSvg } from '../../style/weather'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg'
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg'
import { ReactComponent as RainIcon } from './images/rain.svg'
import { ReactComponent as RefreshIcon } from './images/refresh.svg'

const WeatherContent = () => {

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} style={location}>Taipei</Col>
        <Col xs={11} sm={11} md={5} style={description}>多雲時晴</Col>
        <Col xs={1} sm={1}vmd={1}>
          <RefreshIcon style={refreshSvg} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} xl={4} style={temperature}>
          <div className='mr-2'>23°C</div>
          <CloudyIcon style={styleSvg} />
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} style={airFlow}>
          <div className='mr-2'>23 m/h</div>
          <AirFlowIcon style={styleSvg} />
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} style={rain}>
          <div className='mr-2'>48%</div>
          <RainIcon style={styleSvg} />
        </Col>
      </Row>
    </Container>
  )
}

export default WeatherContent
