import { useEffect, useRef } from 'react'
import { Button, Dropdown } from 'react-bootstrap'

// setInterval in react hooks to use
export const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

// random key id generate
export const randomKeyValue = () => {
  return Math.random().toString(36).substr(2,10) + Date.now().toString(36).substr(4,10)
}

export const LocatListGroupButton = ({items, setLocatValue}) => {
  return (
    <>
      <Button className='m-2' key={items.locationName} onClick={() => setLocatValue(`${items.locationName}`)}>{items.locationName}</Button>
    </>
  )
}

export const LocationDropdownArray = (locat, twoFuncForWeather) => {
  return (
    <>
      {
        locat.map(arr =>
        <Dropdown.Item key={arr.id} href="#" onClick={() => twoFuncForWeather(arr)}>{arr.location}</Dropdown.Item>)
      }
    </>
  )
}
