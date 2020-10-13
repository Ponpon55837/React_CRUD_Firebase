import React from 'react'

const HuivConmponents = ({ currentWeather }) => {

  const huivSwitch = () => {
    switch(true) {
      case (0 <= currentWeather.huiv && currentWeather.huiv < 3):
        return('低量級')
      case (3 <= currentWeather.huiv && currentWeather.huiv < 6):
        return('中量級')
      case (6 <= currentWeather.huiv && currentWeather.huiv < 8):
        return('高量級')
      case (8 <= currentWeather.huiv && currentWeather.huiv < 11):
        return('過量級')
      case (11 <= currentWeather.huiv):
        return('危險級')
      default:
        return('低量級')
    }
  }

  return (
    <div className='mr-2 mt-4'> 紫外線：
      { currentWeather && huivSwitch() }
    </div>
  )
}

export default HuivConmponents
