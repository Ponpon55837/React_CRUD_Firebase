import React from 'react'
import useFirestore from '../../hooks/useFireStore'
import PhotoUpload from './PhotoUpload'
import { motion } from 'framer-motion'

const PhotoGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')
    console.log(docs)

  return (
    <>
      <div className='img-grid container'><PhotoUpload /></div>
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
              alt='upload pic'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["0%", "66%", "100%", "33%", "0%"], }}
              tramsition={{ delay: 1 }} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default PhotoGrid
