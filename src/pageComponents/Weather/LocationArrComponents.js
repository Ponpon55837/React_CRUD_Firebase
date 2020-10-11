import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const LocationArrComponents = ({
  currentWeather,
  areaState,
  locationArrNorth,
  locationArrCenter,
  locationArrSouth,
  locationArrEast,
  twoFuncForWeather }) => {

  return (
    <>
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
    </>
  )
}

export default  LocationArrComponents
