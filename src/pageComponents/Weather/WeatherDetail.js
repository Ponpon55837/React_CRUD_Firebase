import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg'
import { ReactComponent as RainIcon } from './images/rain.svg'
import { ReactComponent as ClearIcon } from './images/day-clear.svg'
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg'
import { ReactComponent as CloudyFOGIcon } from './images/day-cloudy-fog.svg'
import { ReactComponent as DayFOGIcon } from './images/day-fog.svg'
import { ReactComponent as ClearWithRainIcon } from './images/day-partially-clear-with-rain.svg'

const WeatherDetail = ({ currentWeather, description, temperature, airFlow, rain, styleSvg }) => {

  const initialStyle = {
    transform: '',
    transition: ''
  }

  const [mouseMoveState, setMouseMoveState] = useState(initialStyle)

  const mouseMoveHandler = (e) => {
    e.preventDefault()
    let xAxis = (window.innerWidth / 2 - e.pageX) / 5
    let yAxis = (window.innerHeight / 2 - e.pageY) / 5
    setMouseMoveState({
      ...initialStyle,
      transform:`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })
  }

  const mouseEnterHandler = (e) => {
    e.preventDefault()
    setMouseMoveState({
      ...initialStyle,
      transition: 'none'
    })
  }

  const mouseLeaveHandler = (e) => {
    e.preventDefault()
    setMouseMoveState({
      ...initialStyle,
      transform: `rotateY(0deg) rotateX(0deg)`,
      transition: "all 0.5s ease"
    })
  }

  const descriSwitch = () => {
    switch(currentWeather.description) {
      case '天氣：晴':
        return (<ClearIcon style={styleSvg} />)
      case '天氣：多雲':
        return (<CloudyIcon style={styleSvg} />)
      case '天氣：多雲時晴':
        return (<CloudyIcon style={styleSvg} />)
      case '天氣：晴有霾':
        return (<DayFOGIcon style={styleSvg} />)
      case '天氣：陰':
        return (<CloudyFOGIcon style={styleSvg} />)
      case '天氣：陰有雨':
        return (<ClearWithRainIcon style={styleSvg} />)
      case '天氣：多雲有靄':
        return (<CloudyIcon style={styleSvg} />)
      case '天氣：陰有霾':
        return (<DayFOGIcon style={styleSvg} />)
      default:
        return (<ClearIcon style={styleSvg} />)
    }
  }

  return (
    <>
      <Row>
        <Col sm={12} md={12} style={description}>
          {currentWeather.description !== '-99' ? currentWeather.description : ''}
        </Col>
        <Col className='mb-2' sm={12} md={12}>{currentWeather.observationTime}</Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} xl={4} style={temperature}>
          <div className='mr-2'>
            {Math.round(currentWeather.temperature)}°C
          </div>
          <div
            onMouseMove={mouseMoveHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            style={mouseMoveState}>
            {descriSwitch()}
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} style={airFlow}>
          <div className='mr-2'>
            {currentWeather.windSpeed} m/h
          </div>
          <div
            onMouseMove={mouseMoveHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            style={mouseMoveState}>
            <AirFlowIcon style={styleSvg} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} xl={4} style={rain}>
          <div className='mr-2'>
            {(currentWeather.humid * 100).toFixed(2)}%
          </div>
          <div
            onMouseMove={mouseMoveHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            style={mouseMoveState}>
            <RainIcon style={styleSvg} />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default WeatherDetail
