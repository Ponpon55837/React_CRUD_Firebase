import React, { useState } from 'react'
import { location, description, temperature, airFlow, rain, styleSvg, refreshSvg, textStyle } from '../../style/weather'
import { areaArr, locationArrNorth, locationArrCenter, locationArrSouth, locationArrEast } from '../../apiComponents/weatherAPI'
import { Container, Row, Col,Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg'
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
          <DropdownButton className='m-2' variant='light' title={currentWeather.locationName ? `縣市：${currentWeather.locationName}` : '選擇縣市'}>
            { areaState === '北部' && locationArrNorth.map(arr =>
              <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
            )}
            { areaState === '中部' && locationArrCenter.map(arr =>
              <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
            )}
            { areaState === '南部' && locationArrSouth.map(arr =>
              <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
            )}
            { areaState === '東部' && locationArrEast.map(arr =>
              <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>
            )}
          </DropdownButton>
        { btnState ?
          <Button className='m-2' variant='info' onClick={() => twoFuncForChangeBtn()}>Submit</Button> : ''
        }
        <Col className='m-2' xs={4} sm={2} md={1}>
          <Button variant="light" onClick={() => weatherHandler()}><RefreshIcon style={refreshSvg} /></Button>
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
          <div className='mr-2 mt-4'> 紫外線：
            {0 <= currentWeather.huiv && currentWeather.huiv < 3 && '低量級'}
            {3 <= currentWeather.huiv && currentWeather.huiv < 6 && '中量級'}
            {6 <= currentWeather.huiv && currentWeather.huiv < 8 && '高量級'}
            {8 <= currentWeather.huiv && currentWeather.huiv < 11 && '過量級'}
            {11 <= currentWeather.huiv && '危險級'}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default WeatherContent
