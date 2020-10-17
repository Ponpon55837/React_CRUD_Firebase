import React from 'react'
import { Toast } from 'react-bootstrap'

const CountryWeatherContent = ({ countryWeatherValue }) => {

  return (
    <>
      {countryWeatherValue.map(items =>
        <Toast key={items.locationName} >
          <Toast.Header>
            <strong className="mr-auto">{items.locationName}</strong>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      )}
    </>
  )
}

export default CountryWeatherContent
