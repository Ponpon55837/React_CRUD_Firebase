import React from 'react'
import { location, description, temperature, airFlow, rain, styleSvg, refreshSvg, textStyle } from '../../style/weather'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg'
import { ReactComponent as CloudyFOGIcon } from './images/day-cloudy-fog.svg'
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg'
import { ReactComponent as RainIcon } from './images/rain.svg'
import { ReactComponent as RefreshIcon } from './images/refresh.svg'

const WeatherContent = ({ currentWeather, weatherHandler }) => {

  const twoFuncHandler = () => {
    weatherHandler()
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
          <div className='mr-2'>{currentWeather.humid * 100}%</div>
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
          <div className='mr-2 mt-4'> 紫外線：
            {0 <= currentWeather.huiv && currentWeather.huiv <= 2 && '低量級'}
            {3 <= currentWeather.huiv && currentWeather.huiv <= 5 && '中量級'}
            {6 <= currentWeather.huiv && currentWeather.huiv <= 7 && '高量級'}
            {8 <= currentWeather.huiv && currentWeather.huiv <= 10 && '過量級'}
            {11 <= currentWeather.huiv && '危險級'}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default WeatherContent
