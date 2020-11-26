import React, { useState } from 'react'
import useFirestore from '../../hooks/useFireStore'
import { motion } from 'framer-motion'

const PhotoGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')

  const initialStyle = {
    transform: '',
    transition: '',
    borderRadius: '10px'
  }
  const [mouseMoveState, setMouseMoveState] = useState(initialStyle)

  const mouseMoveHandler = (e) => {
    e.preventDefault()
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10
    setMouseMoveState({
      ...initialStyle,
      transform:`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
      transition: "all 0.5s ease"
    })
  }

  const mouseEnterHandler = (e) => {
    e.preventDefault()
    setMouseMoveState({
      ...initialStyle,
      transition: 'none'
    })
  }

  const mouseLeaveHandler = (e) => {
    e.preventDefault()
    setMouseMoveState({
      ...initialStyle,
      transform: `rotateY(0deg) rotateX(0deg)`,
      transition: "all 0.5s ease"
    })
  }

  return (
    <>
      <div className='img-grid container'>
        { docs && docs.map(doc => (
          <motion.div
            className='img-wrap col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 '
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}>
            <motion.img
              src={doc.url}
              alt={`upload pic by ${doc.url}`}
              onMouseMove={mouseMoveHandler}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              style={mouseMoveState}/>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default PhotoGrid
