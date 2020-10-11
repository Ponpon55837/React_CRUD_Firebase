import React from 'react'

const HuivConmponents = ({ currentWeather }) => {

  return (
    <div className='mr-2 mt-4'> 紫外線：
      {0 <= currentWeather.huiv && currentWeather.huiv < 3 && '低量級'}
      {3 <= currentWeather.huiv && currentWeather.huiv < 6 && '中量級'}
      {6 <= currentWeather.huiv && currentWeather.huiv < 8 && '高量級'}
      {8 <= currentWeather.huiv && currentWeather.huiv < 11 && '過量級'}
      {11 <= currentWeather.huiv && '危險級'}
    </div>
  )
}

export default HuivConmponents
