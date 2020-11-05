import React, { useState } from 'react'
import { randomKeyValue, LocatListGroupButton } from '../../functionComponents/OtherFunction'
import { ListGroup, Card, Col } from 'react-bootstrap'

const CountryWeatherContent = ({ countryWeatherValue }) => {

  const [locatValue, setLocatValue] = useState('')
  const sixCityValue = countryWeatherValue.sort((a, b) => {
    // 使用sort進行排序，排序的介質為當兩個geocode除以100以後比較大小
    return (a.geocode/100) > (b.geocode/100)})
    // 使用filter過濾geocode < 1000的值，
    // 由於這邊沒有return，使用的是原先的countryWeatherValue陣列
    // 而不是經過sort的陣列，這邊過濾完才進行sort的
    .filter(arr => arr.geocode < 1000)
  const noneSixCity = countryWeatherValue.sort((a, b) => {
    return (a.geocode/100) > (b.geocode/100)})
    // 過濾完後將陣列進行反轉，這樣就不需要在sort中改變比較方式
    .filter(arr => arr.geocode > 1000).reverse()

  return (
    <>
      <ListGroup className='mb-3'>
        <ListGroup.Item>
          {sixCityValue.map((items, i) =>
            <LocatListGroupButton key={i} items={items} setLocatValue={setLocatValue} />
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          {noneSixCity.map((items, i) =>
            <LocatListGroupButton key={i} items={items} setLocatValue={setLocatValue} />
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
            <Col xs={12} sm={12} md={4} key={item.elementName}>
              {item.description}({item.elementName}):
              {item.time.pop().elementValue.map(ite =>
                <p key={`${ite.value}` + randomKeyValue()}>
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
