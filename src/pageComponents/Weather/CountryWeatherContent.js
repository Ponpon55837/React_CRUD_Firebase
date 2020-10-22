import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const CountryWeatherContent = ({ countryWeatherValue }) => {

  const [locatValue, setLocatValue] = useState('')

  return (
    <>
      {countryWeatherValue.map(items =>
        <Button className='m-2' key={items.locationName} onClick={() => setLocatValue(`${items.locationName}`)}>{items.locationName}</Button>
      )}
      {countryWeatherValue.map(items =>
        locatValue === items.locationName ?
        <Card className='mb-3' key={items.locationName}>
          <Card.Header>
            <strong className="mr-auto">{items.locationName}</strong>
          </Card.Header>
          <Card.Body>
          {items.weatherElement.map(item =>
            <Col xs={12} sm={12} md={12} key={item.elementName}>
              {item.description}({item.elementName}):
              {item.time.pop().elementValue.map(ite =>
                <p key={`${ite.value}+${ite.measures}`}>
                  {ite.value}{ite.measures}
                </p>
              )}
            </Col>
          )}
          </Card.Body>
        </Card> : ''
      )}
    </>
  )
}

export default CountryWeatherContent
