import React from 'react'
import { Toast } from 'react-bootstrap'

const CountryWeatherContent = ({ countryWeatherValue }) => {

  const mapFirstLayer = (item) => {
    item.time.map(ite =>
      <p>{ite.elementValue}</p>
    )
  }

  return (
    <>
      {countryWeatherValue.map(items =>
        <Toast style={{minWidth: '100px', maxWidth: '1000px'}} key={items.locationName} >
          <Toast.Header>
            <strong className="mr-auto">{items.locationName}</strong>
          </Toast.Header>
          <Toast.Body>
            {items.weatherElement.map(item =>
              <p key={item.elementName}>
                {item.description}({item.elementName}):
                {mapFirstLayer(item)}
              </p>
            )}
          </Toast.Body>
        </Toast>
      )}
      {console.log(countryWeatherValue)}
    </>
  )
}

export default CountryWeatherContent
