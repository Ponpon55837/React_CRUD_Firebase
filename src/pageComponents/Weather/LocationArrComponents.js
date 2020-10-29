import React from 'react'
import { LocationDropdownArray } from '../../functionComponents/OtherFunction'
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
      return (
        <>
          { locationArrNorth.map(arr =>
            <LocationDropdownArray arr={arr} twoFuncForWeather={twoFuncForWeather}/>
          )}
        </>
      )
      case '中部':
      return (
        <>
          { locationArrCenter.map(arr =>
            <LocationDropdownArray arr={arr} twoFuncForWeather={twoFuncForWeather}/>
          )}
        </>
      )
      case '南部':
      return (
        <>
          { locationArrSouth.map(arr =>
            <LocationDropdownArray arr={arr} twoFuncForWeather={twoFuncForWeather}/>
          )}
        </>
      )
      case '東部':
      return (
        <>
          { locationArrEast.map(arr =>
            <LocationDropdownArray arr={arr} twoFuncForWeather={twoFuncForWeather}/>
          )}
        </>
      )
      default:
      return (
        <>
          { locationArrNorth.map(arr =>
            <LocationDropdownArray arr={arr} twoFuncForWeather={twoFuncForWeather}/>
          )}
        </>
      )
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
