import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const CountryWeatherContent = ({ countryWeatherValue }) => {

  const mapFirstLayer = (item) => {
    item.time.map(ite =>
      <p>{ite.elementValue}</p>
    )
  }

  return (
    <>
      {countryWeatherValue.map(items =>
        <Button className='m-2' key={items.locationName}>{items.locationName}</Button>
      )}
      {countryWeatherValue.map(items =>
        <Card className='mb-3' key={items.locationName}>
          <Card.Header>
            <strong className="mr-auto">{items.locationName}</strong>
          </Card.Header>
          <Card.Body>
          {items.weatherElement.map(item =>
            <Col xs={12} sm={12} md={12} key={item.elementName}>
              {item.description}({item.elementName}):
              {mapFirstLayer(item)}
            </Col>
          )}
          </Card.Body>
        </Card>
      )}
      {console.log(countryWeatherValue)}
    </>
  )
}

export default CountryWeatherContent
