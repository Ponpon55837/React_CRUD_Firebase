import { useEffect, useRef } from 'react';

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
