import React, { useState } from 'react'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import { footerStyle } from '../style/style.js'

const Footer = () => {

  const [fontValue, setFontValue] = useState('40px')
  const mouseEnterHandler = () => {
    setFontValue('50px')
  }
  const mouseOverHandler = () => {
    setFontValue('50px')
  }
  const mouseLeaveHandler = () => {
    setFontValue('40px')
  }

  return (
    <footer style={footerStyle} className='py-5 mt-5'>
      <a
        href='https://github.com/Ponpon55837'
        title='My Github Profile'
        onMouseEnter={mouseEnterHandler}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}>
        <LogoGithub
          fontSize={fontValue}
          color="#ffffff" />
        </a>
    </footer>
  )
}

export default Footer
