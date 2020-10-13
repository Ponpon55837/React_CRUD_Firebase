import React from 'react'
import { ReactComponent as ClearIcon } from './images/day-clear.svg'
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg'
import { ReactComponent as CloudyFOGIcon } from './images/day-cloudy-fog.svg'
import { ReactComponent as DayFOGIcon } from './images/day-fog.svg'
import { ReactComponent as ClearWithRainIcon } from './images/day-partially-clear-with-rain.svg'

const WeatherDescription = ({ currentWeather, styleSvg }) => {

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
      case '天氣：陰有雨'
        return (<ClearWithRainIcon style={styleSvg} />)
    }
  }

  return (
    <>
      {descriSwitch()}
    </>
  )
}

export default WeatherDescription
