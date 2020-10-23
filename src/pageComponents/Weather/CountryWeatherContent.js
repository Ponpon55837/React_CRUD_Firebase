import React, { useState } from 'react'
import { ListGroup, Button, Card, Col } from 'react-bootstrap'

const CountryWeatherContent = ({ countryWeatherValue }) => {

  const [locatValue, setLocatValue] = useState('')
  const sixCityValue = countryWeatherValue.sort((a, b) => {
    return (a.geocode/100) > (b.geocode/100)})
    .filter(arr => arr.geocode < 1000)
  const noneSixCity = countryWeatherValue.sort((a, b) => {
    return (a.geocode/100) < (b.geocode/100)})
    .filter(arr => arr.geocode > 1000)

  return (
    <>
      <ListGroup className='mb-3'>
        <ListGroup.Item>
          {sixCityValue.map(items =>
            <Button className='m-2' key={items.locationName} onClick={() => setLocatValue(`${items.locationName}`)}>{items.locationName}</Button>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          {noneSixCity.map(items =>
            <Button className='m-2' key={items.locationName} onClick={() => setLocatValue(`${items.locationName}`)}>{items.locationName}</Button>
          )}
        </ListGroup.Item>
      </ListGroup>
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
