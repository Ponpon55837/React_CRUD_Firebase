import React, { useState } from 'react'
import { randomKeyValue, LocatListGroupButton } from '../../functionComponents/OtherFunction'
import { ListGroup, ListGroupItem, Card, Col, Badge, Button } from 'react-bootstrap'

const CountryWeatherContent = ({ countryWeatherValue }) => {

  const [cityBtn, setCityBtn] = useState('')
  const [locatValue, setLocatValue] = useState('')
  // 用來一次控制兩個button輸入值時，進行State的改變
  const twoFuncForCityBtn = (city, locatValue) => {
    setCityBtn(city)
    setLocatValue(locatValue)
  }
  // 新設陣列進行變換，這樣才不會污染舊的陣列
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
    // 使用pop函式調整最後一列值
  return (
    <>
      <div className='mb-2'>
        <Button className='m-2' variant='info' disabled={cityBtn === '六都'} onClick={() => twoFuncForCityBtn('六都', '')}>六都</Button>
        <Button className='m-2' variant='info' disabled={cityBtn === '其它縣市'} onClick={() => twoFuncForCityBtn('其它縣市', '')}>其它縣市</Button>
      </div>
      <ListGroup className='mb-3' hidden={cityBtn !== '六都'}>
        <ListGroup.Item>
          {sixCityValue.map((items, i) =>
            <LocatListGroupButton key={i} items={items} setLocatValue={setLocatValue} />
          )}
        </ListGroup.Item>
      </ListGroup>
      <ListGroup className='mb-3' hidden={cityBtn !== '其它縣市'}>
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
            <Button variant="link" size='sm' className='mx-2' onClick={() => setLocatValue('')}>🅧</Button>
            <strong className="mr-auto">{items.locationName}</strong>
          </Card.Header>
          <ListGroup>
          {items.weatherElement.map(item =>
            <ListGroupItem className='d-flex justify-content-xl-center justify-content-lg-center' key={item.elementName}>
              {item.description}({item.elementName}):
              {item.time.pop().elementValue.map(ite =>
                <Badge variant="secondary" key={`${ite.value}` + randomKeyValue()}>
                  {ite.value.length > 10 ? ite.value.slice(0,9) : ite.value}
                  {ite.measures.replace('NA', '').replace('自定義', '').replace('文字', '').replace('單位', '').replace('Wx', '')}
                </Badge>
              )}
            </ListGroupItem>
          )}
          </ListGroup>
        </Card> : ''
      )}
    </>
  )
}

export default CountryWeatherContent
