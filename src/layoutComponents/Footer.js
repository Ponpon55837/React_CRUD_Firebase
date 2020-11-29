import React, { useState } from 'react'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import { footerStyle } from '../style/style.js'

const Footer = () => {

  const [fontValue, setFontValue] = useState('40px')
  const [beatValue, setBeatValue] = useState(false)
  const mouseEnterHandler = () => {
    setFontValue('70px')
    setBeatValue(true)
  }
  const mouseOverHandler = () => {
    setFontValue('70px')
    setBeatValue(true)
  }
  const mouseLeaveHandler = () => {
    setFontValue('40px')
    setBeatValue(false)
  }

  return (
    <footer style={footerStyle} className='py-5 mt-5'>
      <a
        href='https://github.com/Ponpon55837'
        title='My Github Profile'
        target="_blank" rel="noreferrer noopener"
        onMouseEnter={mouseEnterHandler}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}>
        <LogoGithub
          fontSize={fontValue}
          beat={beatValue}
          color="#ffffff" />
        </a>
    </footer>
  )
}

export default Footer
