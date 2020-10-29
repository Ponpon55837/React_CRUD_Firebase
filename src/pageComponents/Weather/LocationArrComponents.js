import React from 'react'
import { locationDropdownArray } from '../../functionComponents/OtherFunction'
import { DropdownButton } from 'react-bootstrap'

const LocationArrComponents = ({
  currentWeather,
  areaState,
  locationArrNorth,
  locationArrCenter,
  locationArrSouth,
  locationArrEast,
  twoFuncForWeather }) => {

  const locationSwitch = () => {
    switch(areaState){
      case '北部':
      return locationDropdownArray(locationArrNorth, twoFuncForWeather)
      case '中部':
      return locationDropdownArray(locationArrCenter, twoFuncForWeather)
      case '南部':
      return locationDropdownArray(locationArrSouth, twoFuncForWeather)
      case '東部':
      return locationDropdownArray(locationArrEast, twoFuncForWeather)
      default:
      return locationDropdownArray(locationArrNorth, twoFuncForWeather)
    }
  }

  return (
    <>
      <DropdownButton className='m-2' variant='light' title={currentWeather.locationName ? `縣市：${currentWeather.locationName}` : '選擇縣市'}>
        {locationSwitch()}
      </DropdownButton>
    </>
  )
}

export default  LocationArrComponents
